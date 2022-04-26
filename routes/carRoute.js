const express = require("express");
const router = express.Router();

const carController = require("../controllers/carController");

router.route("/carro").get(carController.allCars).post(carController.createCar);

router
  .route("/:id")
  .put(carController.updateCar)
  .get(carController.carInfo)
  .delete(carController.deleteCar);

module.exports = router;
