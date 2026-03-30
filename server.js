const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Git Practice App 🚀");
});

app.get("/about", (req, res) => {
  res.send("This is GitHub practice project");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
