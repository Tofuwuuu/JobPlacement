import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { FaUser, FaBriefcase, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [usersCount, setUsersCount] = useState(0);
    const [jobsCount, setJobsCount] = useState(0);
    const [applicationsCount, setApplicationsCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Users Count (Replace with real endpoint)
                const usersRes = await axios.get("http://localhost:5000/api/users");
                setUsersCount(usersRes.data.length);

                // Fetch Jobs Count
                const jobsRes = await axios.get("http://localhost:5000/api/jobs");
                setJobsCount(jobsRes.data.length);

                // Fetch Active Applications Count (Replace with real endpoint)
                const applicationsRes = await axios.get("http://localhost:5000/api/applications");
                setApplicationsCount(applicationsRes.data.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <Navbar />
                <div style={{ padding: "20px" }}>
                    <h2>Dashboard Overview</h2>
                    
                    {/* Widget Statistics */}
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <Widget title="Total Users" count={usersCount} icon={<FaUser color="#007bff" />} />
                        <Widget title="Total Jobs" count={jobsCount} icon={<FaBriefcase color="#28a745" />} />
                        <Widget title="Active Applications" count={applicationsCount} icon={<FaCheckCircle color="#ffc107" />} />
                    </div>

                    {/* Add Job Button */}
                    <div style={{ marginTop: "20px" }}>
                        <Link to="/add-job">
                            <button style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "16px"
                            }}>
                                ➕ Add New Job
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
