import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4">Welcome to the Dashboard</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
