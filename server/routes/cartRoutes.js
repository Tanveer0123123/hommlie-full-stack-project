const express = require("express");
const router = express.Router();
const db = require("../config/db");

const {
  addCart,
  getCart
} = require("../controllers/cartController");

router.post("/", addCart);
router.get("/:userId", getCart);

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  console.log("Deleting cart id:", id);

  db.query("DELETE FROM cart WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    console.log("Rows affected:", result.affectedRows);

    res.json({ message: "Deleted successfully" });
  });
});

module.exports = router;