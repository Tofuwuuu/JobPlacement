const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Get all jobs
router.get("/", async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Add a job
router.post("/", async (req, res) => {
    const newJob = new Job(req.body);
    await newJob.save();
    res.json({ message: "Job added successfully!" });
});

// Delete a job
router.delete("/:id", async (req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted!" });
});

module.exports = router;
