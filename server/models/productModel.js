const db = require("../config/db");

// GET all products
const getAllProducts = (callback) => {
  const sql = `
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
  `;
  db.query(sql, callback);
};

// ADD product
const addProduct = (data, callback) => {
  const sql = `
    INSERT INTO products (name, price, image, description, category_id)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [data.name, data.price, data.image, data.description, data.category_id],
    callback
  );
};

module.exports = {
  getAllProducts,
  addProduct,
};