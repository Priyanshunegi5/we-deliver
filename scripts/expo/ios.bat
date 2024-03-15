@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\..\

REM Tell the developer what this batch script is doing
ECHO Starting Expo Server for IOS!

REM This will start expo server for ios
CALL npm run ios

REM we just pop out the pushed directory for reset.
POPD

EXIT

REM ===============================================================