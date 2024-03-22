const fs = require("fs");
const path = require("path");
const productService = require("../data/productService");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.render("index", { products: productService.indexVisited() });
  },
  search: (req, res) => {},
};

module.exports = controller;
