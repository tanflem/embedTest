const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Available pages:');
    console.log(`- http://localhost:${PORT}/index.html`);
    console.log(`- http://localhost:${PORT}/stage.html`);
    console.log(`- http://localhost:${PORT}/production.html`);
    console.log(`- http://localhost:${PORT}/streaming.html`);
    console.log(`- http://localhost:${PORT}/download-test.html`);
}); 