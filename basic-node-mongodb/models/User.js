const mongoose = require("mongoose");

//models are like tables in mysql. schema is the structure of the table/model.
//error handling in node 
//database queries 
//BE heavy projects 


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },
});

//mongoose.model method takes name of the model and schema of the model
const User = mongoose.model("User", userSchema);

module.exports = User;
