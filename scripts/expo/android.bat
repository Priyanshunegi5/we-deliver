@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\..\

REM Tell the developer what this batch script is doing
ECHO Starting Expo Server for ANDRIOD!

REM This will start expo server for android
CALL npm run android

REM we just pop out the pushed directory for reset.
POPD

EXIT

REM ===============================================================