const express = require("express");
const router = express.Router();

// Dummy Users (Replace this with MongoDB model later)
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" }
];

// Get total users
router.get("/", (req, res) => {
    res.json(users);
});

module.exports = router;  // ✅ Make sure you're exporting router
