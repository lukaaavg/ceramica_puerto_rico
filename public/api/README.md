# Configuración del endpoint de contacto (PHP)

Por seguridad, el archivo real `api/contact.php` valida el origen y aplica
honeypot + rate limit. Para activar envío por SMTP en producción, definir
las siguientes constantes (por ejemplo en un archivo no versionado):

```php
define('CERAMICA_SMTP_ENABLED', true);
define('CERAMICA_SMTP_HOST', 'smtp.hostinger.com');
define('CERAMICA_SMTP_PORT', 465);
define('CERAMICA_SMTP_SECURE', 'ssl');
define('CERAMICA_SMTP_USER', 'no-reply@ceramicaptorico.com.ar');
define('CERAMICA_SMTP_PASS', '****');
define('CERAMICA_SMTP_FROM', 'no-reply@ceramicaptorico.com.ar');
define('CERAMICA_MAIL_TO', 'ventas@ceramicaptorico.com.ar');
```

Si PHPMailer no está disponible, el endpoint registra la consulta en
`api/logs/contact.log` (modo desarrollo).
