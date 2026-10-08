@echo off
REM ============================================================
REM  Build de producción — genera dist/ listo para subir por FTPS
REM ============================================================

cd /d "%~dp0"

echo.
echo  Compilando sitio estatico...
echo.

call npm run build
if errorlevel 1 (
  echo.
  echo  ERROR en el build.
  pause
  exit /b 1
)

echo.
echo  Build OK. Salida en: %CD%\dist
echo.
pause
