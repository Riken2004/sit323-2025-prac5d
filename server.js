// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dockerised App</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <div class="container">
        <h1>🚀 This is My Dockerized Node.js App. Welcome!</h1>
        <p>This app is now running in a Docker container 🎉</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
