const { Router } = require("express");
const {
  addRent,
  getRents,
  getRentById,
  updateRent,
} = require("../controllers/rent.controller");

const router = Router();

router.get("/", getRents);
router.get("/:id", getRentById);
router.post("/", addRent);
router.put("/:id", updateRent);

module.exports = router;
