const express = require("express");
const {
  addNewUser,
  getAllUsers,
  getUsersById,
  deleteUser,
  updateUser,
  signIn,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signin", signIn);
router.post("/", addNewUser);
router.get("/:id", getUsersById);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
