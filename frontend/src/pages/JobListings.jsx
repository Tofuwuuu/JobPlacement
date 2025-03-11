import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Button, TextField, MenuItem, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const JobListings = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [location, setLocation] = useState("");

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

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const salaryMatch =
      (!minSalary || job.salary >= parseInt(minSalary)) &&
      (!maxSalary || job.salary <= parseInt(maxSalary));
    const locationMatch = !location || job.location === location;
    return titleMatch && salaryMatch && locationMatch;
  });

  return (
    <Box p={4} maxWidth="900px" mx="auto">
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => navigate(-1)} 
        sx={{ mb: 3, textTransform: "none", fontWeight: "bold" }}
      >
        ← Back
      </Button>

      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3} color="primary">
        Job Listings
      </Typography>

      {/* Filters Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: "12px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Search jobs..."
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Min Salary"
              type="number"
              variant="outlined"
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Max Salary"
              type="number"
              variant="outlined"
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              label="Filter by Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <MenuItem value="">All Locations</MenuItem>
              {uniqueLocations.map((loc) => (
                <MenuItem key={loc} value={loc}>
                  {loc}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <Card key={job.id} sx={{ mb: 3, p: 2, boxShadow: 3, borderRadius: "12px", transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" color="primary">
                {job.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {job.company} - {job.location}
              </Typography>
              <Typography variant="body1" fontWeight="bold" mt={1}>
                Salary: {job.salary}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                {job.description}
              </Typography>

              <Box mt={2} display="flex" gap={2}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handleEdit(job)}
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  Edit
                </Button>

                <Button 
                  variant="contained" 
                  color="error" 
                  onClick={() => handleDelete(job.id)}
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  Delete
                </Button>

                {/* Apply Now Button */}
                <Button 
                  variant="contained" 
                  color="success"
                  onClick={() => navigate(`/apply-job`, { state: job })}
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  Apply Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" textAlign="center" color="textSecondary">
          No jobs match your filters. Try adjusting your search!
        </Typography>
      )}
    </Box>
  );
};

export default JobListings;
