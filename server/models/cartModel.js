const db = require("../config/db");

// Add to cart
const addToCart = (data, callback) => {
  const sql = `
    INSERT INTO cart (user_id, product_id, quantity)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [data.user_id, data.product_id, data.quantity], callback);
};

// Get cart items
const getCartItems = (userId, callback) => {
  const sql = `
    SELECT cart.*, products.name, products.price, products.image
    FROM cart
    JOIN products ON cart.product_id = products.id
    WHERE cart.user_id = ?
  `;
  db.query(sql, [userId], callback);
};

module.exports = {
  addToCart,
  getCartItems,
};