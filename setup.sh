#!/bin/bash

echo "🚀 Good-to-Go - Complete Setup Script"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check Node.js
echo "Checking prerequisites..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js found: $(node --version)${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm found: $(npm --version)${NC}"

echo ""
echo "Installing frontend dependencies..."
npm install

echo ""
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

echo ""
echo -e "${YELLOW}⚙️  Setting up environment files...${NC}"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
    echo -e "${GREEN}✓ Created .env.local${NC}"
else
    echo -e "${YELLOW}⚠️  .env.local already exists${NC}"
fi

# Check if backend/.env exists
if [ ! -f backend/.env ]; then
    cat > backend/.env << EOF
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gtg-database
JWT_SECRET=your-super-secret-jwt-key-change-in-production
FRONTEND_URL=http://localhost:3000
EOF
    echo -e "${GREEN}✓ Created backend/.env${NC}"
else
    echo -e "${YELLOW}⚠️  backend/.env already exists${NC}"
fi

echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Start MongoDB:"
echo "   mongod"
echo ""
echo "2. Seed the database (optional):"
echo "   npm run backend:seed"
echo ""
echo "3. In one terminal, start the backend:"
echo "   npm run backend:dev"
echo ""
echo "4. In another terminal, start the frontend:"
echo "   npm run dev"
echo ""
echo "5. Open http://localhost:3000 in your browser"
echo ""
echo "For more information, see SETUP.md or DOCUMENTATION.md"
