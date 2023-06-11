const { errorHandler } = require("../helpers/error_handler");
const PriceType = require("../models/price_type");

const addPriceType = async (req, res) => {
  try {
    const { price_per_day, price_per_hour, late_fee_per_hour } = req.body;
    if (price_per_day == 0 || price_per_hour == 0 || late_fee_per_hour == 0) {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }
    const newPriceType = await PriceType({
      price_per_day,
      price_per_hour,
      late_fee_per_hour,
    });
    await newPriceType.validate();
    await newPriceType.save();
    res.status(200).send({ message: "price type qo'shildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getPriceTypeById = async (req, res) => {
  try {
    const priceType = await PriceType.findOne({ _id: req.params.id });
    if (!priceType) {
      s3l;
      return res.status(400).send({ message: "Prise Type topilmadi!!!" });
    }
    res.json({ priceType });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getPriceTypes = async (req, res) => {
  try {
    const priceTypes = await PriceType.find({})
    if (!priceTypes) {
      return res.status(400).send({ message: "Prise Type topilmadi!!!" });
    }
    res.json({ priceTypes });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updatePriceType = async (req, res) => {
  try {
    const { price_per_day, price_per_hour, late_fee_per_hour } = req.body;
    if (price_per_day == 0 || price_per_hour == 0) {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }

    const updaePriceType = await PriceType.updateOne(
      { id: req.params.id },
      { $set: { price_per_day, price_per_hour, late_fee_per_hour } }
    );
    await updaePriceType.save();

    res.status(200).send({ message: "Prise Type update bo'ldi" });
  } catch (error) {
    errorHandler(res, error);
  }
};


module.exports = {
  addPriceType,
  getPriceTypes,
  getPriceTypeById,
  updatePriceType
};
