const express = require("express");
const path = require("path");

const app = express();
const publicDir = __dirname;

app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/equipe', (req, res) => {
  res.sendFile(path.join(publicDir, 'equipe.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(publicDir, 'faq.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});