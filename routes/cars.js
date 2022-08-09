const express = require("express");
const router = express.Router();
const carsController = require("../controllers/carsController");
router.get("/", (req, res, next) => {
  return res.json(carsController.getAllData());
});

router.get("/makers", (req, res, next) => {
  return res.json(carsController.getAllCarMakers(req, res));
});

router.get("/:maker/modelData", (req, res, next) => {
  return res.json(carsController.getModelData(req, res));
});

module.exports = router;
