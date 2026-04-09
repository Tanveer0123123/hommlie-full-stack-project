const Cart = require("../models/cartModel");

// ADD to cart
exports.addCart = (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  Cart.addToCart({ user_id, product_id, quantity }, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Added to cart " });
  });
};

// GET cart items
exports.getCart = (req, res) => {
  const userId = req.params.userId;

  Cart.getCartItems(userId, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
};