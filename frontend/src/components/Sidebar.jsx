import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
      </List>
    </Drawer>
  );
};

export default Sidebar;
