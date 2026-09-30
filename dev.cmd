@echo off
REM ============================================================
REM  Cerámica Puerto Rico — dev server
REM  Doble clic o ejecutar desde cmd para arrancar Astro dev.
REM  Para detener: Ctrl+C en esta ventana.
REM ============================================================

cd /d "D:\DOCUMENTOS\Documents\ceramica pto rico"

echo.
echo  Iniciando Astro dev server...
echo  URL: http://127.0.0.1:4321/
echo  Para salir: Ctrl+C
echo.

npm run dev -- --host 127.0.0.1 --port 4321

echo.
echo  Server detenido.
pause
