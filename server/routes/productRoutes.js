const express = require("express");
const router = express.Router();
const db = require("../config/db");

const {
  getProducts,
  createProduct
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", createProduct);


router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product deleted" });
  });
});

module.exports = router;