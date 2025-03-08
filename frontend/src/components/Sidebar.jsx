import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside style={{ width: "200px", height: "100vh", background: "#222", color: "#fff", padding: "20px" }}>
            <ul>
                <li><Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
                <li><Link to="/users" style={{ color: "#fff" }}>Users</Link></li>
                <li><Link to="/jobs" style={{ color: "#fff" }}>Jobs</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
