const express = require("express");
const router = express.Router();

// Route test
router.get("/test", (req, res) => {
  res.json({ message: "API fonctionne correctement !" });
});

module.exports = router;
