const express = require("express");
const router = express.Router();
const db = require("../config/db");


// GET ALL ORDERS
router.get("/orders", (req, res) => {
  const sql = `
    SELECT o.*, u.name 
    FROM orders o
    LEFT JOIN users u ON o.user_id = u.id
    ORDER BY o.id DESC
  `;

  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);

    res.json(data);
  });
});


// UPDATE ORDER STATUS
router.put("/orders/:id", (req, res) => {
  const { status } = req.body;
  const id = req.params.id;

  db.query(
    "UPDATE orders SET status=? WHERE id=?",
    [status, id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Updated" });
    }
  );
});

//  ADMIN STATS
router.get("/stats", (req, res) => {

  const stats = {};

  db.query("SELECT COUNT(*) as total FROM orders", (err, orderRes) => {
    if (err) return res.status(500).json(err);

    stats.orders = orderRes[0].total;

    db.query("SELECT SUM(total_amount) as revenue FROM orders", (err, revRes) => {
      if (err) return res.status(500).json(err);

      stats.revenue = revRes[0].revenue || 0;

      db.query("SELECT COUNT(*) as total FROM products", (err, prodRes) => {
        if (err) return res.status(500).json(err);

        stats.products = prodRes[0].total;

        res.json(stats);
      });
    });
  });

});


module.exports = router;