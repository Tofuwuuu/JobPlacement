import React, { useState } from "react";

const JobPlacementModule = () => {
  const [applications, setApplications] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, NY",
      description: "Develop and maintain software applications.",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Analytics Co",
      location: "San Francisco, CA",
      description: "Analyze and interpret complex datasets.",
    },
  ];

  const handleApply = (job) => {
    setApplications([...applications, { ...job, status: "Under Review" }]);
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Job Placement Module</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Job Placement Opportunities</h2>

        {/* Job Listings */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Available Jobs</h3>
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="p-4 bg-gray-100 rounded shadow">
                <h4 className="font-semibold">{job.title}</h4>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Description:</strong> {job.description}</p>
                <button
                  className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                  onClick={() => handleApply(job)}
                >
                  Apply
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Application Status */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Application Status</h3>
          <ul className="space-y-4">
            {applications.length > 0 ? (
              applications.map((app, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded shadow">
                  <h4 className="font-semibold">{app.title}</h4>
                  <p><strong>Status:</strong> <span className="text-yellow-600">{app.status}</span></p>
                </li>
              ))
            ) : (
              <p>No applications submitted yet.</p>
            )}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 mt-6 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 CvSU Alumni Verification System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default JobPlacementModule;
