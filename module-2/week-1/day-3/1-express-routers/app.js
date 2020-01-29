require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
// above, add body key to any httpRequest object => allow you to parse the posted data
app.set("views", "./views");
app.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

const publicRouter = require("./routes/public-area")
app.use(publicRouter);

app.use(require("./routes/private-area"));


app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})
