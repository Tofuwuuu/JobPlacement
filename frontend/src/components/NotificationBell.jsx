// src/components/NotificationBell.jsx
import { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NotificationBell() {
  const [notifications] = useState([
    'Your CVSU diploma verification is complete',
    'New job match: Frontend Developer at TechCorp'
  ]);

  return (
    <IconButton color="inherit">
      <Badge badgeContent={notifications.length} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}