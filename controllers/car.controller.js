const { errorHandler } = require("../helpers/error_handler");
const Car = require("../models/car");

const addCar = async (req, res) => {
  try {
    const { car_number, make, model, year, mileage, price_type_id } = req.body;
    if (car_number == 0 || make == '') {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }
    const newCar = await Car({
      car_number,
      make,
      model,
      year,
      mileage,
      price_type_id,
    });
    await newCar.validate();
    await newCar.save();
    res.status(200).send({ message: "car qo'shildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id });
    if (!car) {
      s3l;
      return res.status(400).send({ message: "car topilmadi!!!" });
    }
    res.json({ car });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Car.find({})
    if (!cars) {
      return res.status(400).send({ message: "car topilmadi!!!" });
    }
    res.json({ cars });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateCar = async (req, res) => {
  try {
    const { car_number, make, model, year, mileage, price_type_id } = req.body;
    if (car_number == 0 || make == "") {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }

    const updateCar = await Car.updateOne(
      { id: req.params.id },
      {
        $set: {
          car_number: car_number,
          make: make,
          model: model,
          year: year,
          mileage: mileage,
          price_type_id: price_type_id,
        },
      }
    );
    await updateCar.save();

    res.status(200).send({ message: "car update bo'ldi" });
  } catch (error) {
    errorHandler(res, error);
  }
};



module.exports = {
  addCar,
  getCars,
  getCarById,
  updateCar
};
