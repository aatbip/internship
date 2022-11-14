//CRUD operations
//create, read, update, delete

//adv node concepts - async await in node, internal libraries of node, thread
//error handling in node 

const User = require("../models/User");

const addNewUser = async (req, res) => {
  const { name, age } = req.body;

  await User.create({ name, age });

  res.json("User Created");
};

module.exports = {
  addNewUser,
};
