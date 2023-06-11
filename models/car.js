const { Schema, model } = require("mongoose");

const price_type = require("./price_type");

const carSchema = new Schema(
  {
    car_number: {
      type: Number,
      unique: true,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    year: {
      type: Date,
    },
    mileage: {
      type: String,
    },
    price_type_id: {
      type: Schema.Types.ObjectId,
      ref: "price_type",
    },

    subdepartment: price_type.schema,
    price_type: [price_type.schema],
  },
  {
    versionKey: false,
  }
);

module.exports = model("car", carSchema);
