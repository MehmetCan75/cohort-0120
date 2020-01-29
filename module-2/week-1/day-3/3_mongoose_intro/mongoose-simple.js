const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exampleApp", { useNewUrlParser: true });

// MVC
// MODEL database stored values => mongodb
// VIEW (what your user can see ... pages !!!) => hbs
// CONTROLER (chef d'orchestre) => express's routing functions + middlewares

const Cat = mongoose.model("Cat", { name: String });

function createCat(catName) {
  const oneCat = new Cat({ name: catName });
  oneCat
    .save()
    .then(res => {
      console.log("one cat has been saved to DB");
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function readCats() {
  
  console.log("------->");

  // Cat.find((err, cats) => {
  //   console.log(cats);
  //   cats.forEach(cat => {
  //     console.log(" --> cat: ", cat.name);
  //   });
  // });
  
  Cat.find()
  .then(dbRes => {
    console.log(dbRes);
  })
  .catch(dbErr => {
    console.error(dbErr);
  })
}

function addTenCats() {
  for (let i = 0; i < 10; i++) {
    createCat(`Cat ${i + 1}`);
  }
}

// addTenCats();
// createCat(`Mina`);


setTimeout(readCats, 1500);
