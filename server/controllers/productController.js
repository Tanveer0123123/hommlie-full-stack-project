const Product = require("../models/productModel");
const db = require("../config/db");

// GET products
exports.getProducts = (req, res) => {
  Product.getAllProducts((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

// ADD product
exports.createProduct = (req, res) => {
  const { name, price, image, description, category_id } = req.body;

  Product.addProduct(
    { name, price, image, description, category_id },
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.json({ message: "Product Added " });
    }
  );
};