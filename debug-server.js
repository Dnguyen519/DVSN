const http = require('http');

console.log('🔍 Testing basic HTTP server on port 3000...\n');

const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DVSN Debug</title>
        <style>
          body {
            background: black;
            color: white;
            font-family: Arial;
            padding: 50px;
          }
          h1 { color: #0f0; }
          .info { 
            background: #111; 
            padding: 20px; 
            margin: 20px 0;
            border: 1px solid #333;
          }
        </style>
      </head>
      <body>
        <h1>✅ Basic HTTP Server Working!</h1>
        <div class="info">
          <p>Time: ${new Date().toLocaleString()}</p>
          <p>Node Version: ${process.version}</p>
          <p>Platform: ${process.platform}</p>
          <p>Directory: ${__dirname}</p>
        </div>
        <p>If you can see this page, your system can serve on localhost:3000</p>
        <p>Next step: Run the Next.js development server with <code>npm run dev</code></p>
      </body>
    </html>
  `);
});

server.listen(3000, '127.0.0.1', () => {
  console.log('✅ Server is running!');
  console.log('📍 Open your browser to: http://localhost:3000');
  console.log('🛑 Press Ctrl+C to stop\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('❌ Port 3000 is already in use!');
    console.error('   Run: lsof -i :3000');
    console.error('   Then kill the process using that port');
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});