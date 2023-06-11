const { Schema, model } = require("mongoose");

const client = require("./client");
const car = require("./car")

const rentSchema = new Schema(
  {
    car_id: {
      type: Schema.Types.ObjectId,
      ref: "car",
    },
    first_name: {
      type: Schema.Types.ObjectId,
      ref: "client",
    },
    from_datetime: {
      type: Date,
      required: true,
    },
    to_datetime: {
      type: Date,
      required: true,
    },
    rent_statu_id: {
      type: Number,
    },

    rent_type_id: {
      type: Number,
    },

    amount: {
      type: Number,
      required: true,
    },

    subdepartment: client.schema,
    client: [client.schema],

    subdepartment: car.schema,
    car: [car.schema],
  },
  {
    versionKey: false,
  }
);

module.exports = model("Rent", rentSchema);
