const { Router } = require("express");
const {
  addCar,
  getCars,
  getCarById,
  updateCar,
} = require("../controllers/car.controller");

const router = Router();

router.get("/", getCars);
router.get("/:id", getCarById);
router.post("/", addCar);
router.put("/:id", updateCar);

module.exports = router;
