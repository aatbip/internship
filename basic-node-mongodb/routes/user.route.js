const express = require("express");
const { addNewUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/", addNewUser);


module.exports = router; 
