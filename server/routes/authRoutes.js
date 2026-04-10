const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//  REGISTER user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check user exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, data) => {
      if (data.length > 0) {
        return res.status(400).json("User already exists");
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // insert user
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err, result) => {
          if (err) return res.status(500).json(err);

          res.json({ message: "User registered successfully" });
        }
      );
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


//  LOGIN 
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(400).json("User not found");

    const user = data[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json("Wrong password");

    // create token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      "secretkey",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  });
});

module.exports = router;