require("./config/db");

const express = require("express");
const cors = require("cors");

const car = require("./routes/carRoute");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(car);


app.listen(3000, () => {
  console.log("Running on port 3000");
});

