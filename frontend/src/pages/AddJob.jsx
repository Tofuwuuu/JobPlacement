import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const [job, setJob] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/jobs", job);
            alert("Job added successfully!");
            navigate("/dashboard"); // Redirect to dashboard after adding job
        } catch (error) {
            console.error("Error adding job:", error);
        }
    };

    return (
        <div>
            <h2>Add Job</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Job Title" value={job.title} onChange={handleChange} required />
                <input type="text" name="company" placeholder="Company Name" value={job.company} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
                <input type="number" name="salary" placeholder="Salary" value={job.salary} onChange={handleChange} required />
                <textarea name="description" placeholder="Job Description" value={job.description} onChange={handleChange} required></textarea>
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;
