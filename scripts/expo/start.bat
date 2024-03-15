@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\..\

REM Tell the developer what this batch script is doing
ECHO Starting Expo Server!

REM This will start expo server
CALL npm run start

REM we just pop out the pushed directory for reset.
POPD

EXIT

REM ===============================================================