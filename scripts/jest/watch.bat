@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\..\

REM Tell the developer what this batch script is doing
ECHO Starting Jest Test WATCH!

REM This will start jest unit watch
CALL npm run test:watch

REM we just pop out the pushed directory for reset.
POPD

EXIT

REM ===============================================================