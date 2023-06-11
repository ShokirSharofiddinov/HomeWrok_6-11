const { Router } = require("express");
const {
  addPriceType,
  getPriceTypes,
  getPriceTypeById,
  updatePriceType
} = require("../controllers/price_type.controller");

const router = Router();

router.get("/", getPriceTypes);
router.get("/:id", getPriceTypeById);
router.post("/", addPriceType);
router.put("/:id", updatePriceType);

module.exports = router