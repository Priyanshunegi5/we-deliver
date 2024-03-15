@ECHO OFF

REM ===============================================================
REM ========================= Main Script =========================
REM ===============================================================

REM Change current directory to project root directory
PUSHD %~dp0\..\..\

REM Tell the developer what this batch script is doing
ECHO Starting Jest Test UNIT!

REM This will start jest unit test
CALL npm run test:unit

REM we just pop out the pushed directory for reset.
POPD

REM You just need some extra time to see why your test failed
PAUSE

REM ===============================================================