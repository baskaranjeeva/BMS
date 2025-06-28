const express = require("express");
const app = express();
const dbConfig = require("./config/dbConfig");
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.listen(5056, () => {
  console.log("Server is running on port 5056");
});
