const express = require("express");
require("dotenv").config();
const dbConnection = require("./db/dbConnection");
const router = require("./routes/index");
const cors = require("cors");

const app = express();

//server middleware
app.use(cors());
app.use(express.json());

//connect with database
dbConnection();

//setup base route
app.use("/api", router);

//server base endpoint
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//to create a server we have listen method
app.listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});
