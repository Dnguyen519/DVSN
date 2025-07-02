const fs = require('fs');
const path = require('path');

console.log('🔍 DVSN Portfolio Setup Check');
console.log('=============================\n');

// Check Node.js version
console.log('Node.js version:', process.version);

// Check if key dependencies exist
const deps = ['next', 'react', 'react-dom'];
console.log('\n📦 Checking dependencies:');

deps.forEach(dep => {
  const depPath = path.join(__dirname, 'node_modules', dep);
  const exists = fs.existsSync(depPath);
  console.log(`${exists ? '✅' : '❌'} ${dep}: ${exists ? 'installed' : 'missing'}`);
});

// Check key files
console.log('\n📄 Checking key files:');
const files = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'tailwind.config.js',
  'next.config.js'
];

files.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🚀 To start the server, run: npm run dev');
console.log('📍 Then open: http://localhost:3000\n');