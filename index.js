const express = require("express");
const app = express();

// PORT
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(PORT);
