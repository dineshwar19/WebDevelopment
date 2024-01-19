const mongoose = require("mongoose");
const user = require("./user");
const ComplexSchema = require("./complexSchema");
main().catch((err) => console.log(err.message));
async function main() {
  await mongoose.connect("mongodb://localhost/firstMDb");
  // const User = await user.create({
  //   name: "Dinesh",
  //   age: 21,
  // });
  // const nex = await user.create({
  //   name: "NECSA",
  //   age: 4,
  // });

  //complex schema
  // const newUser = await ComplexSchema.create({
  //   name: "NCS",
  //   age: 21, //age: 121 is not in the limit
  //   email: "ncs@gmail.com",
  //   // age: 121,
  //   hobbies: ["Programming", "Problem solving", "frontend"],
  // });

  //   newUser.createdAt = 5; //it wont allow ,because it is immuatable

  // const showUser = await user.find({ name: "Dinesh" }, { name: 1 });
  // const showUser = await user
  //   .where("name")
  //   .equals("Dinesh")
  //   .where("age")
  //   .lt(24)
  //   .select("name"); //only shows the name;

  //join two object data

  const newUser = await ComplexSchema.where("name")
    .equals("NCS")
    .limit(1)
    .populate("favouritePerson");
  // newUser[0].favouritePerson = "65a78106ddb9ee4c207ade84";
  // await newUser[0].save();
  // const showUser = await ComplexSchema.find();

  // add function for a schema
  // const userFunc = await user.findOne({ age: 21 });
  // userFunc.greet();

  //own data query function like findByOne()
  const ownFunc = await user.findByAge(21);
  const ownQuery = await user.find().byName("Dinesh");
  const virtualProp = await user.findOne({ name: "Dinesh" });
  // console.log(virtualProp.userAge);
  // console.log(ownQuery);

  // middlewares
  console.log(virtualProp);
  virtualProp.save();
}
