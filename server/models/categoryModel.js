const db = require("../config/db");

// GET all categories
const getAllCategories = (callback) => {
  db.query("SELECT * FROM categories", callback);
};

// ADD category
const addCategory = (data, callback) => {
  const sql = "INSERT INTO categories (name, image) VALUES (?, ?)";
  db.query(sql, [data.name, data.image], callback);
};

module.exports = {
  getAllCategories,
  addCategory,
};