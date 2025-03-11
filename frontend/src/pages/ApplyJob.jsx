import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { submitApplication } from "../services/applicationService";
import { Box, TextField, Button, Typography } from "@mui/material";

const ApplyJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state; // Get job details

  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [success, setSuccess] = useState("");

  const handleApply = (e) => {
    e.preventDefault();
    const application = {
      id: Date.now(),
      jobTitle: job.title,
      applicantName,
      email,
      resume,
      status: "Pending",
    };
    submitApplication(application);
    setSuccess("Application submitted successfully!");
    setTimeout(() => navigate("/jobs"), 2000);
  };

  return (
    <Box p={4} maxWidth="500px" mx="auto" textAlign="center">
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Apply for {job.title}
      </Typography>

      {success && <Typography color="green">{success}</Typography>}

      <form onSubmit={handleApply}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          required
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Resume (Paste Link)"
          variant="outlined"
          fullWidth
          required
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit Application
        </Button>
      </form>
    </Box>
  );
};

export default ApplyJob;
