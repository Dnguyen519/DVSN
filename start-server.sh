#!/bin/bash

echo "🎬 DVSN Studios - Development Server Diagnostic & Startup"
echo "========================================================"
echo ""

# Kill any existing processes on port 3000
echo "🔍 Checking for processes on port 3000..."
if lsof -i :3000 > /dev/null 2>&1; then
    echo "⚠️  Found process on port 3000, killing it..."
    kill -9 $(lsof -ti:3000) 2>/dev/null
    sleep 2
fi

# Check Node.js installation
echo "🔍 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js version: $(node --version)"

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi
echo "✅ npm version: $(npm --version)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Not in the project directory!"
    echo "Please run this script from the DVSN Studio Project directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clear Next.js cache
if [ -d ".next" ]; then
    echo "🧹 Clearing Next.js cache..."
    rm -rf .next
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local
fi

echo ""
echo "🚀 Starting Next.js development server..."
echo "======================================="
echo ""
echo "📍 Server will be available at:"
echo "   • http://localhost:3000"
echo "   • http://127.0.0.1:3000"
echo ""
echo "⏳ Please wait for the server to start..."
echo "   (This may take 10-30 seconds on first run)"
echo ""
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev