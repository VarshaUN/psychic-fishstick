const express = require('express');
const app = express();
const port = 3000;
const path=require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
  res.send("This is the about page.");
});

