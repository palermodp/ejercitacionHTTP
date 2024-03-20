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
    res.render("product-edit-form");
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
