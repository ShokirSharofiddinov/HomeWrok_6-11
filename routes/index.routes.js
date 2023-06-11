const { Router } = require("express");

const price_typeRouter = require("./price_type.routes");
const clientRouter = require("./client.routes");
const carRouter = require("./car.routes");
const rentRouter = require("./rent.routes");
const router = Router();

router.use("/api/priceType", price_typeRouter);
router.use("/api/client", clientRouter);
router.use("/api/car", carRouter);
router.use("/api/rent", rentRouter);


module.exports = router;
