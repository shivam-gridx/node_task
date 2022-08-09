const fs = require("fs");
const path = require("path");
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/data.json"))
);
const helper = require("../middleware/helper");

class carsController {
  getAllData() {
    return data;
  }

  getAllCarMakers(req, res) {
    const json = helper.getJson("success", "null", []);
    data.forEach((obj) => {
      json.data.push(obj["make"]);
    });
    return json;
  }

  getModelData(req, res) {
    const json = helper.getJson("success", "null", []);
    let maker = req.params.maker;
    data.forEach((carData) => {
      if (carData["make"] == maker) {
        json.data.push(carData);
      }
    });
    return json;
  }
}

module.exports = new carsController();
