const { Router } = require("express");
const {
  addClient,
  getClients,
  getClientById,
  updateClient,
} = require("../controllers/client.controller");

const router = Router();

router.get("/", getClients);
router.get("/:id", getClientById);
router.post("/", addClient);
router.put("/:id", updateClient);

module.exports = router