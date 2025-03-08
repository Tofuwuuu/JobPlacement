const express = require("express");
const router = express.Router();

// Dummy Applications (Replace this with MongoDB model later)
const applications = [
    { id: 1, jobId: 101, userId: 1 },
    { id: 2, jobId: 102, userId: 2 }
];

// Get total applications
router.get("/", (req, res) => {
    res.json(applications);
});

module.exports = router;  // ✅ Make sure you're exporting router
