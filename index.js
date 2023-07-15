require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const basketRouter = require("./routes/basket.route");
const favoriteRouter = require("./routes/favorite.route");

app.use(cors());
app.use("/basket", basketRouter);
app.use("/favorite", favoriteRouter);

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("mongoose warning"));

app.listen(process.env.PORT, () => {
  console.log("Server start on port: " + process.env.PORT);
});
