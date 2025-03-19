import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box
      sx={{
        width: collapsed ? 60 : 240,
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        position: 'fixed',
        transition: 'width 0.3s',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ display: collapsed ? 'none' : 'block' }}>Menu</h2>
        <IconButton onClick={toggleSidebar} sx={{ color: '#ecf0f1' }}>
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
      <Divider sx={{ margin: '16px 0' }} />
      <List sx={{ marginTop: 2 }}>
        <ListItem button component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { backgroundColor: '#34495e' } }}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={collapsed ? '' : 'Home'} />
        </ListItem>
        <ListItem button component={Link} to="/profile" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { backgroundColor: '#34495e' } }}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={collapsed ? '' : 'Profile'} />
        </ListItem>
        <ListItem button component={Link} to="/jobs" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { backgroundColor: '#34495e' } }}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary={collapsed ? '' : 'Jobs'} />
        </ListItem>
      </List>
    </Box>
  );
}
