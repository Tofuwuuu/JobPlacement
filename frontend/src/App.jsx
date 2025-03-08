import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Jobs from "./pages/Jobs";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Job Placement System</h1>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/jobs" element={<Jobs />} />
            </Routes>
        </Router>
    );
};

export default App;
