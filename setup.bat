@echo off
REM Good-to-Go - Complete Setup Script for Windows

echo.
echo 🚀 Good-to-Go - Complete Setup Script
echo ========================================
echo.

REM Check Node.js
echo Checking prerequisites...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed
    exit /b 1
)
echo ✓ Node.js found: 
node --version

REM Check npm
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed
    exit /b 1
)
echo ✓ npm found:
npm --version

echo.
echo Installing frontend dependencies...
call npm install

echo.
echo Installing backend dependencies...
cd backend
call npm install
cd ..

echo.
echo ⚙️  Setting up environment files...

REM Check if .env.local exists
if not exist .env.local (
    (
        echo NEXT_PUBLIC_API_URL=http://localhost:5000/api
    ) > .env.local
    echo ✓ Created .env.local
) else (
    echo ⚠️  .env.local already exists
)

REM Check if backend/.env exists
if not exist backend\.env (
    (
        echo NODE_ENV=development
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/gtg-database
        echo JWT_SECRET=your-super-secret-jwt-key-change-in-production
        echo FRONTEND_URL=http://localhost:3000
    ) > backend\.env
    echo ✓ Created backend\.env
) else (
    echo ⚠️  backend\.env already exists
)

echo.
echo ✅ Setup Complete!
echo.
echo Next steps:
echo 1. Start MongoDB:
echo    mongod
echo.
echo 2. Seed the database (optional^):
echo    npm run backend:seed
echo.
echo 3. In one terminal, start the backend:
echo    npm run backend:dev
echo.
echo 4. In another terminal, start the frontend:
echo    npm run dev
echo.
echo 5. Open http://localhost:3000 in your browser
echo.
echo For more information, see SETUP.md or DOCUMENTATION.md
echo.
pause
