//CRUD operations
//create, read, update, delete

//adv node concepts - async await in node, internal libraries of node, thread
//error handling in node

const User = require("../models/User");
const asyncWrapper = require("../utils/asyncWrapper");
const AppError = require("../AppError");

const addNewUser = asyncWrapper(async (req, res, next) => {
  const { username, password } = req.body;

  await User.create({ username, password });
  res.json("User Created");
});

const signIn = asyncWrapper(async (req, res, next) => {
  const { username, password } = req.body;

  // if (!username) {
  //   throw new AppError("Include username", 400);
  // }
  const user = await User.findOne({ username: username });

  let isMatch = await user.comparePassword(password);

  if (isMatch) {
    res.status(200).json(user);
    next();
  }
});

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (e) {
    next();
  }
};

const getUsersById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.json(user);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await User.deleteOne({ _id: id });

  res.json("deleted");
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      name,
      age,
    },
    {
      new: true,
    }
  );

  res.json(updatedUser);
};

module.exports = {
  addNewUser,
  getAllUsers,
  getUsersById,
  deleteUser,
  updateUser,
  signIn,
};
