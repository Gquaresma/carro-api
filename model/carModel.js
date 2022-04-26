const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const carSchema = new Schema({
    year: String,
    brand: String,
    model: String,
    license: String
})

const Car = new mongoose.model("Car", carSchema);

module.exports = Car;