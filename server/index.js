const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");

app.listen(5056, () => {
  console.log("Server is running on port 5056");
});
