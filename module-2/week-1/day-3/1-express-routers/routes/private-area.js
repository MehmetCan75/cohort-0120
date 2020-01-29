const express = require("express");
const router = new express.Router();

router.get(["/admin"], (req, res) => {
  res.render("testAdmin");
});

router.get("/admin/users", (req, res) => {
  res.render("testAdmin");
});

router.get("/admin/products", (req, res) => {
  res.render("testAdmin");
});

module.exports = router;
