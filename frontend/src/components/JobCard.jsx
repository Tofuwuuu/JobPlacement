// src/components/JobCard.jsx
export default function JobCard({ job }) {
    return (
      <div className="job-card">
        <h3>{job.title}</h3>
        <p className="company">{job.company}</p>
        <div className="tags">
          <span className="location">{job.location}</span>
          <span className="salary">${job.salaryRange}</span>
        </div>
        <button className="apply-button">View Details</button>
      </div>
    );
  }