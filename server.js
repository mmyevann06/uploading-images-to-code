const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/", uploadRoutes);

app.listen(3000, () => {
  console.log("Server işləyir http://localhost:3000");
});