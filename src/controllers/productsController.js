const productService = require("../data/productService");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", { products: productService.getAll() });
  },
  // Detail - Detail from one product
  detail: (req, res) => {
    res.render("detail", {
      products: productService.getOne(req.params.id),
    });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
  },

  // Update - Form to edit
  edit: (req, res) => {
    res.render("product-edit-form", {
      products: productService.getOne(req.params.id),
    });
  },
  // Update - Method to update
  update: (req, res) => {
    res.send("asdasd");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    res.send("hola");
  },
};

module.exports = controller;
