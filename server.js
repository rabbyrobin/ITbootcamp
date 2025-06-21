const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received: ${name} (${email})`);
  res.json({ message: `Thank you, ${name}! Your email ${email} has been received.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`íº€ Server running at http://localhost:${PORT}`);
});

