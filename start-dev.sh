#!/bin/bash

echo "🎬 Starting DVSN Portfolio Development Server"
echo "==========================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies (this may take a few minutes)..."
    npm install
fi

echo ""
echo "🚀 Starting development server..."
echo "================================"
echo ""

# Start the dev server
npm run dev