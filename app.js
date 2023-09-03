
const express = require("express");
const app = express();
const apiRoutes = require("./src/Routes/api");


app.use(express.json());

app.use("/api", apiRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;