#!/bin/bash

echo "🎬 DVSN Portfolio Setup Script"
echo "=============================="

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p public/images
mkdir -p public/videos
mkdir -p public/fonts

# Create placeholder images
echo "🖼️  Creating placeholder image files..."
touch public/images/hero-poster.jpg
touch public/images/films-bg.jpg
touch public/images/media-bg.jpg
touch public/images/x-bg.jpg
touch public/images/wedding-thumb-1.jpg
touch public/images/wedding-thumb-2.jpg
touch public/images/realestate-thumb-1.jpg
touch public/images/corporate-thumb-1.jpg
touch public/images/experimental-thumb-1.jpg
touch public/images/music-thumb-1.jpg
touch public/og-image.jpg

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local file
echo "🔐 Creating .env.local file..."
cat > .env.local << EOF
# Copy from .env.example and fill in your values
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Fill in your environment variables in .env.local"
echo "2. Add your video files and images to the public directory"
echo "3. Run 'npm run dev' to start the development server"
echo ""
echo "🎬 Ready to create cinematic experiences!"