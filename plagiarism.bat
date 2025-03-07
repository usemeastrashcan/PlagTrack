@echo off
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js is not installed on this computer. Please install it from https://nodejs.org.
    pause
    exit /b
)

node "%~dp0\plagiarism.js"
pause