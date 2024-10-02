const express = require("express");
const router = express.Router();
const middleWare = require("../middleware/authMiddleware");
//Authentication middleware
router.get("/all-questions", (req, res) => {
  res.send("All questions here...");
});
module.exports = router;
