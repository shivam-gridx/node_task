const express = require("express");
const app = express();
const PORT = 8000;
const carsRouter = require("./routes/cars");

app.use("/cars", carsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
