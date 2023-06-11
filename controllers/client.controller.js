const { errorHandler } = require("../helpers/error_handler");
const Client = require("../models/client");

const addClient = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birthdat,
      passport,
      driver_license,
      adress,
      phone,
    } = req.body;
    if (first_name == "" || last_name == "") {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }
    const newClient = await Client({
      first_name,
      last_name,
      birthdat,
      passport,
      driver_license,
      adress,
      phone,
    });
    await newClient.validate();
    await newClient.save();
    res.status(200).send({ message: "Bo'lim qo'shildi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await Client.findOne({ _id: req.params.id });
    if (!client) {
      return res.status(400).send({ message: "Client topilmadi!!!" });
    }
    res.json({ client });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getClients = async (req, res) => {
  try {
    //getclients
    const clients = await Client.find({});
    if (!clients) {
      return res.status(400).send({ message: "Client topilmadi!!!" });
    }
    res.json({ clients });
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateClient = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      birthdat,
      passport,
      driver_license,
      adress,
      phone,
    } = req.body;
    if (first_name == "" || last_name == "") {
      return res.status(400).send({ message: "Ma'lumotlarni to'liq kiriting" });
    }

    const updaeClient = await Client.updateOne(
      { id: req.params.id },
      {
        $set: {
          first_name,
          last_name,
          birthdat,
          passport,
          driver_license,
          adress,
          phone,
        },
      }
    );
    await updaeClient.save();

    res.status(200).send({ message: "Foydalanuvchi update bo'ldi" });
  } catch (error) {
    errorHandler(res, error);
  }
};

module.exports = {
  addClient,
  getClients,
  getClientById,
  updateClient
};
