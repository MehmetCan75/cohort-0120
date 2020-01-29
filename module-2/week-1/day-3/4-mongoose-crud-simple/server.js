const mongoose = require("mongoose");
const crudHandler = require("./student-crud");

mongoose.connect("mongodb://localhost/mongo-express-intro", {
  useNewUrlParser: true
});

// console.log("crudHandler --->");
// console.log(crudHandler);

// crudHandler
//   .createStudent("sylvie", "memain-yé", 56, "PAR0120", "foo@foo.com")
//   .then(dbRes => console.log(dbRes))
//   .catch(dbErr => console.log(dbErr));

// crudHandler.updateStudent("5e3167887e15df1fc9d50263", "bim@codeurs.io");

crudHandler.deleteStudent("5e3149ede188a4087325486d");


// DIY : create a route, get all students, pass them to a view and display them !
