const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productService = {
  products: products,
  getAll: function () {
    return this.products;
  },
  getOne: function (id) {
    return this.products.find((product) => product.id == id);
  },
  indexVisited: function () {
    return this.products.filter((product) => product.category == "visited");
  },
};

module.exports = productService;
