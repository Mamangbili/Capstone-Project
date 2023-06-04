const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Define a sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
