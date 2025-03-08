import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";
import { FaUser, FaBriefcase, FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <Navbar />
                <div style={{ padding: "20px" }}>
                    <h2>Dashboard Overview</h2>
                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <Widget 
                            title="Total Users" 
                            fetchUrl="https://jsonplaceholder.typicode.com/users" 
                            icon={<FaUser color="#007bff" />} 
                        />
                        <Widget 
                            title="Total Jobs" 
                            fetchUrl="https://jsonplaceholder.typicode.com/posts" 
                            icon={<FaBriefcase color="#28a745" />} 
                        />
                        <Widget 
                            title="Active Applications" 
                            fetchUrl="https://jsonplaceholder.typicode.com/comments" 
                            icon={<FaCheckCircle color="#ffc107" />} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
