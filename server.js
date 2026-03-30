const express = require("express");

const app = express();

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Hello Git Practice Ap working finep hello baby2 🚀");
=======
  res.send("Hello Git Practice Ap working finep working kr rha h  🚀");
>>>>>>> main
});

app.get("/about", (req, res) => {
  res.send("This is GitHub practice projec my first this ");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
