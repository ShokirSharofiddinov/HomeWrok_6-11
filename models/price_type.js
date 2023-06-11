const { Schema, model } = require("mongoose");

const priceTypeSchema = new Schema(
  {
    price_per_day: {
      type: Number,
    },
    price_per_hour: {
      type: Number,
    },
    late_fee_per_hour: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("price_type", priceTypeSchema);
