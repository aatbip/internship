const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//models are like tables in mysql. schema is the structure of the table/model.
//error handling in node
//database queries
//BE heavy projects

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

//mongoose.model method takes name of the model and schema of the model
const User = mongoose.model("User", userSchema);

module.exports = User;
