const Car = require("../model/carModel");

module.exports = {
  allCars: async (_, res) => {
    try {
      const cars = await Car.find({});

      if (cars.length === 0) {
        res.status(404).json({ message: "Nenhum carro encotrado" });
      }

      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createCar: async (req, res) => {
    try {
      const { year, brand, model, license } = req.body;

      const newCar = new Car({
        year,
        brand,
        model,
        license,
      });

      const car = await newCar.save();

      res.status(201).json(car);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCar: async (req, res) => {
    try {
      const carId = req.params.id;
      const { year, brand, model, license } = req.body;

      const car = await Car.findOne({ _id: carId });

      if (!car) {
        return res.status(404).json({ message: "Nenhum carro encontrado" });
      }

      const carUpdate = {
        year: year || car.year,
        brand: brand || car.brand,
        model: model || car.model,
        license: license || car.license,
      };

      const update = await Car.findOneAndUpdate({ _id: carId }, carUpdate);

      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  carInfo: async (req, res) => {
    try {
      const find = await Car.findById({ _id: req.params.id });

      res.status(200).json(find);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCar: async (req, res) => {
    try {
      await Car.findByIdAndDelete(req.params.id);

      res.status(200).json({ message: "Carro deletado com sucesso" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
