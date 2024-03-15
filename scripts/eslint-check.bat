@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\

REM Tell the developer what this batch script is doing
ECHO Checking if you still writing bad code ^-*!

REM This will prettify code base with prettier
CALL npm run eslint-check

REM we just pop out the pushed directory for reset.
POPD

REM since you need extra time to see errors in you bad code...
PAUSE

REM ===============================================================