import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-job" element={<AddJob />} />
            </Routes>
        </Router>
    );
};

export default App;
