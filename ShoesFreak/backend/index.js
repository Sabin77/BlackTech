const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());

app.use(express.json());
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/supplier", require("./routes/supplier"));
app.use("/api/product", require("./routes/product"));
app.use("/api/stock", require("./routes/stock"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
