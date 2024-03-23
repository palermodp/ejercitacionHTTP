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
  buscarPorCategoria: function (category) {
    return this.products.filter((product) => product.category == category);
  },
  mostrarPorCategoria: function (category1, category2) {
    return {
      visitados: this.buscarPorCategoria(category1),
      ofertas: this.buscarPorCategoria(category2),
    };
  },
  eliminarProducto: function (id) {
    let filteredElements = this.products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(filteredElements),
      "utf-8"
    );
  },
};

module.exports = productService;
