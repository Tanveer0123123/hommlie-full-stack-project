const Category = require("../models/categoryModel");

// GET categories
exports.getCategories = (req, res) => {
  Category.getAllCategories((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};

// ADD category
exports.createCategory = (req, res) => {
  const { name, image } = req.body;

  Category.addCategory({ name, image }, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Category Added Successfully " });
  });
};