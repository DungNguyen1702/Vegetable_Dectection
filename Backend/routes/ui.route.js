const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../UI/view/test.html");

const htmlContent = fs.readFileSync(filePath, "utf-8");

router.get("/main", (req, res) => {
    res.send(htmlContent);
});

module.exports = router;