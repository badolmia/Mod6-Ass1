// app.js
const express = require("express");
const app = express();
const apiRoutes = require("./src/Routes/api");

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the default route");
});
// Mount the API routes
app.use("/api", apiRoutes);

module.exports = app;
