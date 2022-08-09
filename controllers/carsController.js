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
    const make = req.params.maker;
    const json = helper.getJson("success", "null", []);
    data.forEach((modelData) => {
      if (modelData["make"] == make) {
        delete modelData["make"];
        json.data.push({ modelData });
      }
    });
    return json;
  }
}

module.exports = new carsController();
