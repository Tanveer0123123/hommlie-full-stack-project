const express = require("express");
const router = express.Router();
const db = require("../config/db"); //  DB connection

router.post("/", (req, res) => {
  const { user_id, total_amount, address, items } = req.body;

  db.beginTransaction((err) => {
    if (err) return res.status(500).json(err);

    // STEP 1: insert into orders
    const orderSql = `
      INSERT INTO orders (user_id, total_amount, address)
      VALUES (?, ?, ?)
    `;

    db.query(orderSql, [user_id, total_amount, address], (err, result) => {
      if (err) {
        return db.rollback(() => res.status(500).json(err));
      }

      const orderId = result.insertId;

      // STEP 2: insert into order_items
      const itemSql = `
        INSERT INTO order_items (order_id, product_id, quantity, price)
        VALUES ?
      `;

      const values = items.map(item => [
        orderId,
        item.id,
        item.quantity,
        item.price
      ]);

      db.query(itemSql, [values], (err) => {
        if (err) {
          return db.rollback(() => res.status(500).json(err));
        }

        // STEP 3: clear cart
        db.query("DELETE FROM cart WHERE user_id = ?", [user_id], (err) => {
          if (err) {
            return db.rollback(() => res.status(500).json(err));
          }

          // STEP 4: commit
          db.commit((err) => {
            if (err) {
              return db.rollback(() => res.status(500).json(err));
            }

            res.json({
              message: "Order placed successfully",
              orderId: orderId
            });
          });
        });
      });
    });
  });
});

module.exports = router;