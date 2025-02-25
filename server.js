const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML files dynamically
app.get('/:filename', (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, 'public', fileName);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
