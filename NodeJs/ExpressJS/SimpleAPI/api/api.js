// REST API

const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const data = require("../data/employees.json");

/*{
    console.log(data); 
    output for the data
  employees: [
    { id: 1, firstName: 'Dineshwar', lastName: 'SenthilNathan' },
    { id: 2, firstName: 'alhf8i', lastName: 'lsdfjui' }
  ]
}*/

// const saveData = () => {
//   fs.writeFileSync(
//     path.join(__dirname, "..", "data", "employees.json"),
//     JSON.stringify(data, null, 2),
//     "utf8"
//   );
// };

const saveData = () => {
  fs.writeFile(
    path.join(__dirname, "..", "data", "employees.json"),
    JSON.stringify(data, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully.");
      }
    }
  );
};

// chaining of the CRUD operation

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    //the url data is actually added to the employees.json
    const newEmployee = {
      id: data.employees.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };

    data.employees.push(newEmployee);
    saveData();
    res.json(data);
  })
  .put((req, res) => {
    const updatedEmployee = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    };

    const index = data.employees.findIndex(
      (employee) => employee.id === req.body.id
    );
    console.log(index);
    if (index !== -1) {
      data.employees[index] = updatedEmployee;
    }
    saveData();
    res.json(data);
  })
  .delete((req, res) => {
    // const deletedData = data.employees.filter(
    //   (employee) => employee.id !== req.body.id
    // );
    // data.employees = deletedData;
    // saveData();
    // res.json(data);

    // efficient method for deleting a data
    const index = data.employees.findIndex(
      (employee) => employee.id === req.body.id
    );
    console.log(index);
    if (index !== -1) {
      data.employees.splice(index, 1);
      saveData();
      res.json(data);
    } else {
      res.status(404).json({ error: "employee not found" });
    }
  });

router.route("/:id").get((req, res) => {
  res.json(data.employees[req.params.id - 1]); // req.params ex.: '/users/:id' it capture the id .
});

module.exports = router;
