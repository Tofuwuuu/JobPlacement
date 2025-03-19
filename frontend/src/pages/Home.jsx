import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Check if the sidebar is collapsed (you can set this globally if needed)
    const sidebarWidth = document.querySelector('.sidebar')?.offsetWidth || 240;
    setIsCollapsed(sidebarWidth < 100);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: 'url("/path-to-your-image.jpg")', // Replace with your actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 2,
        marginLeft: isCollapsed ? '80px' : '260px', // Adjust based on sidebar width
        transition: 'margin-left 0.3s ease', // Smooth transition
        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.6)', // Adds a dark overlay for readability
      }}
    >
      <Container maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            color: '#003366', // CVSU Carmona color
        }}
        >
        Welcome to CVSU Alumni Portal
        </Typography>

        <Typography
        variant="h5"
        sx={{
            marginTop: 2,
            marginBottom: 3,
            marginRight: 3,
            color: '#ffcc00', // New color applied here
        }}
        >
         Connect with alumni, explore job opportunities, and stay updated with events.
        </Typography>


        <Box sx={{ marginTop: 4 }}>
          <Button
            component={Link}
            to="/jobs"
            variant="contained"
            color="primary"
            sx={{ marginRight: 2, padding: '10px 30px' }}
          >
            View Job Opportunities
          </Button>
          <Button
            component={Link}
            to="/profile"
            variant="outlined"
            color="secondary"
            sx={{ padding: '10px 30px' }}
          >
            Update Profile
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
