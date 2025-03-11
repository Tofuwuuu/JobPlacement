import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import JobListings from "./pages/JobListings";
import EmployerModule from "./pages/EmployerModule";
import JobDashboard from "./pages/JobDashboard";
import ApplyJob from "./pages/ApplyJob"; // Added ApplyJob import
import ManageApplications from "./pages/ManageApplications"; // Added ManageApplications import
import { isAuthenticated } from "./services/authService";

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/jobs" element={<ProtectedRoute element={<JobListings />} />} />
        <Route path="/employer" element={<ProtectedRoute element={<EmployerModule />} />} />
        <Route path="/job-dashboard" element={<ProtectedRoute element={<JobDashboard />} />} />
        <Route path="/apply-job" element={<ApplyJob />} /> {/* Added ApplyJob route */}
        <Route path="/manage-applications" element={<ProtectedRoute element={<ManageApplications />} />} /> {/* Added ManageApplications route */}
      </Routes>
    </Router>
  );
}

export default App;
