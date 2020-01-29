const Student = require("./models/student");

// console.log("Student --->");
// console.log(Student);

// SMALL TEMPORARY UTIL FUNCTION
function createStudent(name, lastname, age, cohort, email) {
  return Student.create({
    age,
    cohort,
    email,
    name,
    lastname
  });
}

function readStudents() {
  // D.I.Y
}

function updateStudent(id, newMail) {
  
  Student.findByIdAndUpdate(id, { email: newMail })
    .then(res => {
      console.log("user updated", res);
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteStudent(id) {
  Student.findByIdAndRemove(id)
    .then(res => {
      console.log("user removed from db", res);
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
  createStudent, // C
  readStudents, // R
  updateStudent, // U
  deleteStudent // D
};
