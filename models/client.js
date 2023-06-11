const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    birthdat: {
      type: Date,
      required: true,
    },
    passport: {
      type: String,
      unique: true,
    },
    driver_license: {
      type: Boolean,
    },
    adress: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("client", clientSchema);
