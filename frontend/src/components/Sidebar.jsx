import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/jobs">
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText primary="Job Listings" />
        </ListItem>
        <ListItem button component={Link} to="/employer">
          <ListItemIcon><AddBoxIcon /></ListItemIcon>
          <ListItemText primary="Post a Job" />
        </ListItem>
        <ListItem button component={Link} to="/job-dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Job Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/manage-applications">
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Manage Applications" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;