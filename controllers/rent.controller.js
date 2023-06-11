const { errorHandler } = require("../helpers/error_handler");
const Rent = require("../models/rent");

const addRent = async (req, res) => {
  try {
    const {
      car_id,
      first_name,
      from_datetime,
      to_datetime,
      rent_statu_id,
      rent_type_id,
      amount,
      subdepartment,
    } = req.body;
    if (car_id == 0 || first_name == "") {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }
    const newRent = await Rent({
      car_id,
      first_name,
      from_datetime,
      to_datetime,
      rent_statu_id,
      rent_type_id,
      amount,
      subdepartment,
    });
    await newRent.validate();
    await newRent.save();
    res.status(200).send({ message: "rent qo'shildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getRentById = async (req, res) => {
  try {
    const rent = await Rent.findOne({ _id: req.params.id });
    if (!rent) {
      return res.status(400).send({ message: "rent topilmadi!!!" });
    }
    res.json({ rent });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getRents = async (req, res) => {
  try {
    const rents = await Rent.find({});
    if (!rents) {
      return res.status(400).send({ message: "rent topilmadi!!!" });
    }
    res.json({ rents });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateRent = async (req, res) => {
  try {
    const {
      car_number,
      first_name,
      from_datetime,
      to_datetime,
      rent_statu_id,
      rent_type_id,
      amount,
      subdepartment,
    } = req.body;
    if (car_id == 0 || first_name == "") {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }

    const updateRent = await Rent.updateOne(
      { id: req.params.id },
      {
        $set: {
          car_number,
          first_name,
          from_datetime,
          to_datetime,
          rent_statu_id,
          rent_type_id,
          amount,
          subdepartment,
        },
      }
    );
    await updateRent.save();

    res.status(200).send({ message: "rent update bo'ldi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addRent,
  getRents,
  getRentById,
  updateRent,
};
