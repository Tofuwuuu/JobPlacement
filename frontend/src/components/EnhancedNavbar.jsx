import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function EnhancedNavbar() {
  // State for menu anchor (for the profile menu dropdown)
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}> {/* Change color as needed */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CVSU Alumni Portal
        </Typography>

        {/* Notification Bell */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={() => alert('Notifications clicked')} // Handle click for notifications
        >
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* User Menu */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenuOpen}
        >
          <Typography variant="body2">Profile</Typography> {/* Replace with an actual profile icon if needed */}
        </IconButton>

        {/* Menu for Profile */}
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
