require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Import routes properly
const jobsRoute = require("./routes/jobs");
const usersRoute = require("./routes/users");
const applicationsRoute = require("./routes/applications");

// Use routes correctly
app.use("/api/jobs", jobsRoute);
app.use("/api/users", usersRoute);
app.use("/api/applications", applicationsRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
