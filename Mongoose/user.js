const mongoose = require("mongoose");
// It is the schema of the user.

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
 
// add function to a schema
userSchema.methods.greet = function () {
  console.log(`Hi user ${this.name}`);
};

//own data query function
userSchema.statics.findByAge = function (age) {
  return this.where({ age: age });
}; 

userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

// act like a virtual property
userSchema.virtual("userAge").get(function () {
  return `${this.name} : ${this.age}`;
});

//Middlewares
userSchema.pre("save", function (next) {
  this.name = this.age;
  next();
});

userSchema.post("save", function (doc, next) {
  doc.greet();
  next();
});

module.exports = mongoose.model("User", userSchema); // the model is used for creating and reading documents from the underlying MongoDB database.
//  Mongoose automatically looks for the plural, lowercased version of your model name. User -> users.

// PERMITTED SCHEMA TYPES:
/*  
    String
    Number
    Date
    Buffer
    Boolean
    Mixed
    ObjectId
    Array
    Decimal128
    Map
    UUID 
*/
