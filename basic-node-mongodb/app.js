const express = require("express");
require("dotenv").config();
const dbConnection = require("./db/dbConnection");
const router = require("./routes/index");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const app = express();

//server middleware
app.use(cors());
app.use(express.json());



//connect with database
dbConnection();

//setup base route
app.use("/api", router);

//error handling middleware
app.use(errorHandler);

//server base endpoint
app.get("/", (req, res) => {
  res.send("Server is running!");
});

//to create a server we have listen method
app.listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});

/**
 * Programmer error:
 * -> unexpected error
 * -> mistakes in logic, syntax error
 * -> it can be fixed by editing the source code
 *
 * Operational error:
 * -> expected error
 * -> if any operation has failed then operational error exists
 * -> this type of errors should be handled, we should determine what response to send
 *    if this type of errors occur.
 * -> ex: user not found, unauthorized, database error
 */
