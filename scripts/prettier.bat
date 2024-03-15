@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\

REM Tell the developer what this batch script is doing
ECHO Prettifying your bad code style ^-*!

REM This will prettify code base with prettier
CALL npm run prettier

REM we just pop out the pushed directory for reset.
POPD

REM Incase it find something you don't expect
PAUSE

REM ===============================================================