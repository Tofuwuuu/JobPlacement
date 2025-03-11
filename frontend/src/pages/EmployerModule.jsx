import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const EmployerModule = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    jobType: "Full-time", // Default value
  });

  useEffect(() => {
    if (location.state) {
      setJob(location.state); // ✅ Load job details if editing
    }
  }, [location]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    if (job.id) {
      // ✅ Update Existing Job
      jobs = jobs.map((j) => (j.id === job.id ? job : j));
    } else {
      // ✅ Add New Job
      job.id = jobs.length + 1;
      jobs.push(job);
    }

    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert(job.id ? "Job Updated Successfully!" : "Job Added Successfully!");
    navigate("/jobs");
  };

  return (
    <Box p={3} maxWidth={600} mx="auto">
      <Button variant="contained" color="secondary" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h4" mb={2}>{job.id ? "Edit Job" : "Post a New Job"}</Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField label="Job Title" name="title" value={job.title} onChange={handleChange} fullWidth required margin="normal" />
        <TextField label="Company Name" name="company" value={job.company} onChange={handleChange} fullWidth required margin="normal" />
        <TextField label="Location" name="location" value={job.location} onChange={handleChange} fullWidth required margin="normal" />
        <TextField label="Salary" name="salary" value={job.salary} onChange={handleChange} fullWidth required margin="normal" />
        <TextField label="Job Description" name="description" value={job.description} onChange={handleChange} fullWidth required margin="normal" multiline rows={4} />
        
        <TextField
          select
          label="Job Type"
          name="jobType"
          variant="outlined"
          fullWidth
          value={job.jobType}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="Freelance">Freelance</MenuItem>
        </TextField>
        
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          {job.id ? "Update Job" : "Add Job"}
        </Button>
      </form>
    </Box>
  );
};

export default EmployerModule;
