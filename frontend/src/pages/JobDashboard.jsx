import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/authService";

const JobDashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login"); // Redirect to login if not authenticated
    }
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, [navigate]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    }
  };

  return (
    <Box p={4} maxWidth="900px" mx="auto">
      {/* 🔙 Back Button */}
      <Button 
        variant="contained" 
        color="secondary"
        onClick={() => navigate(-1)} 
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        ← Back
      </Button>

      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3} color="primary">
        Job Management Dashboard
      </Typography>

      <Button 
        variant="contained" 
        color="success"
        onClick={() => navigate("/employer")}
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        ➕ Add New Job
      </Button>

      <Paper elevation={3} sx={{ p: 3, borderRadius: "12px" }}>
        <Grid container spacing={2}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <Grid item xs={12} key={job.id}>
                <Card sx={{ p: 2, boxShadow: 3, borderRadius: "12px" }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">{job.title}</Typography>
                    <Typography variant="subtitle1">{job.company} - {job.location}</Typography>
                    <Typography variant="body1"><strong>Salary:</strong> {job.salary}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}><strong>Type:</strong> {job.jobType}</Typography>
                    
                    <Box mt={2} display="flex" gap={2}>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => navigate(`/employer`, { state: job })}
                      >
                        ✏️ Edit
                      </Button>
                      <Button 
                        variant="contained" 
                        color="error" 
                        onClick={() => handleDelete(job.id)}
                      >
                        🗑️ Delete
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography textAlign="center">No jobs available. Add one now!</Typography>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default JobDashboard;