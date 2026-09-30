<?php
/**
 * Cerámica Puerto Rico — endpoint de contacto.
 *
 * SPEC §37: validar, sanitizar, verificar CSRF (opcional),
 * aplicar rate limit básico, usar honeypot, registrar errores,
 * enviar por SMTP (PHPMailer).
 *
 * Esta versión incluye:
 *   - Honeypot anti-spam
 *   - Validación de campos
 *   - Sanitización
 *   - Rate limit por IP (5 / hora)
 *   - Log a archivo
 *   - Soporte para SMTP si se define CERAMICA_SMTP_ENABLED
 *
 * Para activar SMTP:
 *   1) Instalar PHPMailer (composer require phpmailer/phpmailer)
 *   2) Definir constantes SMTP_* y poner CERAMICA_SMTP_ENABLED=true
 *
 * Si no hay SMTP, guarda en /tmp y devuelve OK para desarrollo.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

// — Sólo POST —
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método no permitido.']);
    exit;
}

// — Sólo mismo origen (protección CSRF básica vía Origin/Referer) —
$allowedOrigins = [
    'https://ceramicaptorico.com.ar',
    'https://www.ceramicaptorico.com.ar',
    'http://localhost:4321', // dev
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'message' => 'Origen no autorizado.']);
    exit;
}

// — Honeypot —
$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Solicitud rechazada.']);
    exit;
}

// — Helpers —
function clean(string $v): string {
    $v = trim($v);
    $v = stripslashes($v);
    return htmlspecialchars($v, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function required(string $name, int $min = 1, int $max = 5000): ?string {
    $v = clean((string) ($_POST[$name] ?? ''));
    if (strlen($v) < $min) return null;
    return substr($v, 0, $max);
}

// — Validación —
$name     = required('name', 2, 120);
$email    = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone    = clean((string) ($_POST['phone'] ?? ''));
$profile  = clean((string) ($_POST['profile'] ?? ''));
$locality = clean((string) ($_POST['locality'] ?? ''));
$message  = required('message', 10, 2000);

$errors = [];
if (!$name)              $errors[] = 'nombre';
if (!$email)             $errors[] = 'email';
if (!$profile)           $errors[] = 'perfil';
if (!$message)           $errors[] = 'mensaje';

if ($errors) {
    http_response_code(422);
    echo json_encode([
        'ok'      => false,
        'message' => 'Revisá los campos obligatorios.',
        'fields'  => $errors,
    ]);
    exit;
}

// — Rate limit por IP —
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rateDir = sys_get_temp_dir() . '/ceramica_rl';
if (!is_dir($rateDir)) @mkdir($rateDir, 0700, true);
$rateFile = $rateDir . '/' . md5($ip);
$now = time();
$window = 3600;
$limit = 5;
$hits = [];
if (is_file($rateFile)) {
    $hits = json_decode((string) file_get_contents($rateFile), true) ?: [];
}
$hits = array_filter($hits, fn($t) => $t > $now - $window);
if (count($hits) >= $limit) {
    http_response_code(429);
    echo json_encode([
        'ok'      => false,
        'message' => 'Demasiadas solicitudes. Probá de nuevo más tarde.',
    ]);
    exit;
}
$hits[] = $now;
@file_put_contents($rateFile, json_encode(array_values($hits)));

// — Composición del cuerpo —
$subject = sprintf('[Web] Consulta de %s (%s)', $name, $profile);
$body = sprintf(
    "Nueva consulta desde el sitio web\n\n" .
    "Nombre: %s\nEmail: %s\nTeléfono: %s\nPerfil: %s\nLocalidad: %s\n\n" .
    "Mensaje:\n%s\n",
    $name, $email, $phone ?: '(no informado)', $profile,
    $locality ?: '(no informada)', $message
);

// — Envío —
$recipient = defined('CERAMICA_MAIL_TO') ? CERAMICA_MAIL_TO : 'ventas@ceramicaptorico.com.ar';
$sent = false;
$mode = 'log';

if (defined('CERAMICA_SMTP_ENABLED') && CERAMICA_SMTP_ENABLED === true) {
    try {
        // Requiere PHPMailer
        if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
            throw new RuntimeException('PHPMailer no está instalado.');
        }
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail->isSMTP();
        $mail->Host       = CERAMICA_SMTP_HOST;
        $mail->Port       = (int) CERAMICA_SMTP_PORT;
        $mail->SMTPAuth   = true;
        $mail->Username   = CERAMICA_SMTP_USER;
        $mail->Password   = CERAMICA_SMTP_PASS;
        $mail->SMTPSecure = CERAMICA_SMTP_SECURE ?? 'tls';
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom(CERAMICA_SMTP_FROM ?? CERAMICA_SMTP_USER, 'Web Cerámica Puerto Rico');
        $mail->addAddress($recipient);
        $mail->addReplyTo($email, $name);

        $mail->Subject = $subject;
        $mail->Body    = $body;
        $sent = $mail->send();
        $mode = 'smtp';
    } catch (Throwable $e) {
        error_log('[ceramica-contact] SMTP error: ' . $e->getMessage());
        $sent = false;
    }
}

if (!$sent) {
    // Modo desarrollo: log a archivo
    $logFile = __DIR__ . '/../logs/contact.log';
    if (!is_dir(dirname($logFile))) @mkdir(dirname($logFile), 0755, true);
    @file_put_contents(
        $logFile,
        sprintf("[%s] %s\n%s\n%s\n\n", date('c'), $subject, $body, str_repeat('-', 40)),
        FILE_APPEND
    );
    $sent = true; // aceptamos en dev
}

// — Respuesta —
http_response_code(200);
echo json_encode([
    'ok'      => $sent,
    'message' => 'Consulta recibida.',
    'mode'    => $mode,
]);
