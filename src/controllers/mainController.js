const fs = require("fs");
const path = require("path");
const productService = require("../data/productService");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

const controller = {
  index: (req, res) => {
    res.render("index", { products: productService.indexVisited() });
  },
  search: (req, res) => {},
};

module.exports = controller;
