import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import JobListings from "./pages/JobListings";
import EmployerModule from "./pages/EmployerModule";
import JobDashboard from "./pages/JobDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/employer" element={<EmployerModule />} />
          <Route path="/job-dashboard" element={<JobDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;