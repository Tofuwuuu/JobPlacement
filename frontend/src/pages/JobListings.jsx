import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobListings = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    }
  };

  const handleEdit = (job) => {
    navigate(`/employer`, { state: job });
  };

  return (
    <Box p={3}>
      <Button variant="contained" color="secondary" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Typography variant="h4" mb={2}>Job Listings</Typography>

      {jobs.length > 0 ? (
        jobs.map((job) => (
          <Card key={job.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5">{job.title}</Typography>
              <Typography variant="subtitle1">{job.company} - {job.location}</Typography>
              <Typography variant="body1"><strong>Salary:</strong> {job.salary}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}><strong>Description:</strong> {job.description}</Typography>
              
              <Button variant="contained" color="primary" sx={{ mt: 1, mr: 1 }} onClick={() => handleEdit(job)}>
                Edit
              </Button>

              <Button variant="contained" color="error" sx={{ mt: 1 }} onClick={() => handleDelete(job.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No jobs available. Try adding one!</Typography>
      )}
    </Box>
  );
};

export default JobListings;
