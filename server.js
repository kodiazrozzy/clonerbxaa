const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/beli", (req, res) => {
  const { username, robux } = req.body;
  res.send(`
    <h2>Order Berhasil!</h2>
    <p>Username: ${username}</p>
    <p>Jumlah Robux: ${robux}</p>
    <a href="/">Kembali</a>
  `);
});

app.listen(3000, () => {
  console.log("Server jalan di http://localhost:3000");
});
