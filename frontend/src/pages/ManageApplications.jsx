import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApplications, updateApplicationStatus } from "../services/applicationService";
import { Box, Typography, Card, CardContent, Button, Grid, Paper } from "@mui/material";

const ManageApplications = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    setApplications(getApplications());
  }, []);

  const handleStatusChange = (id, status) => {
    updateApplicationStatus(id, status);
    setApplications(getApplications());
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
        Job Applications
      </Typography>

      <Paper elevation={3} sx={{ p: 3, borderRadius: "12px" }}>
        <Grid container spacing={2}>
          {applications.length > 0 ? (
            applications.map((app) => (
              <Grid item xs={12} key={app.id}>
                <Card sx={{ p: 2, boxShadow: 3, borderRadius: "12px" }}>
                  <CardContent>
                    <Typography variant="h5" fontWeight="bold">{app.jobTitle}</Typography>
                    <Typography variant="subtitle1">{app.applicantName} - {app.email}</Typography>
                    <Typography variant="body2"><strong>Resume:</strong> {app.resume}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Status:</strong> {app.status}
                    </Typography>

                    <Box mt={2} display="flex" gap={2}>
                      <Button 
                        variant="contained" 
                        color="success" 
                        onClick={() => handleStatusChange(app.id, "Accepted")}
                        disabled={app.status !== "Pending"}
                      >
                        ✅ Accept
                      </Button>
                      <Button 
                        variant="contained" 
                        color="error" 
                        onClick={() => handleStatusChange(app.id, "Rejected")}
                        disabled={app.status !== "Pending"}
                      >
                        ❌ Reject
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography textAlign="center">No applications found.</Typography>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ManageApplications;
