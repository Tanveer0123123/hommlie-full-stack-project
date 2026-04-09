const express = require("express");
const router = express.Router();
const db = require("../config/db");

const {
  getProducts,
  createProduct
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", createProduct);

// router.get("/", (req, res) => {
//   const { category_id } = req.query;

//   let sql = "SELECT * FROM products";

//   if (category_id) {
//     sql += ` WHERE category_id = ${category_id}`;
//   }

//   db.query(sql, (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// });

// DELETE PRODUCT
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product deleted" });
  });
});

module.exports = router;