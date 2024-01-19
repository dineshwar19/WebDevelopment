const mongoose = require("mongoose");

// Nested schema:
const nativePlace = new mongoose.Schema({
  town: String,
  street: String,
});

// Complex schema:
const ComplexUser = new mongoose.Schema({
  name: String,
  //   age: Number,
  // to control the limit of the Number
  age: {
    type: Number,
    // min: 18,
    // max: 60,
    // custom validation :
    validate: {
      validator: (v) => v <= 60,
      message: (props) => `${props.value} is not in the limit`,
    },
  },
  //if we need some data necessarily then add required
  email: {
    type: String,
    required: true,
    lowercase: true, //if the data need to be stored in the database by lowercase
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true, // users cant change the data by their own
  },
  email1: String,
  hobbies: [String],
  favouritePerson: {
    type: mongoose.Schema.ObjectId,
    ref: "Complex",
  }, //provide another objectId
  native: nativePlace, //{
  //     town: String,
  //     street: String,
  //   },
});

module.exports = mongoose.model("Complex", ComplexUser);
