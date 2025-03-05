import React, { useState } from "react";

const EmployerInteractionModule = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [applications, setApplications] = useState([
    { id: 1, title: "Software Developer", applicant: "John Doe", status: "Under Review" },
    { id: 2, title: "Data Analyst", applicant: "Jane Smith", status: "Approved" },
  ]);

  const handlePostJob = (e) => {
    e.preventDefault();
    console.log("Job Posted:", { jobTitle, description, requirements });
    setJobTitle("");
    setDescription("");
    setRequirements("");
  };

  const updateApplicationStatus = (id, status) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status } : app));
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employer Interaction Module</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Dashboard</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-6 p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Employer Portal</h2>

        {/* Job Posting Form */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Post a Job</h3>
          <form onSubmit={handlePostJob} className="space-y-4">
            <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full p-2 border rounded" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded"></textarea>
            <textarea placeholder="Requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} className="w-full p-2 border rounded"></textarea>
            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Post Job</button>
          </form>
        </section>

        {/* Application Management */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Manage Applications</h3>
          <ul className="space-y-4">
            {applications.map((app) => (
              <li key={app.id} className="p-4 bg-gray-100 rounded shadow">
                <h4 className="font-semibold">{app.title}</h4>
                <p><strong>Applicant:</strong> {app.applicant}</p>
                <p><strong>Status:</strong> <span className={app.status === "Approved" ? "text-green-600" : "text-yellow-600"}>{app.status}</span></p>
                {app.status === "Under Review" && (
                  <div className="mt-2">
                    <button onClick={() => updateApplicationStatus(app.id, "Approved")} className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">Approve</button>
                    <button onClick={() => updateApplicationStatus(app.id, "Rejected")} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-2">Reject</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 mt-6 text-center">
        <p>&copy; 2025 CvSU Alumni Verification System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EmployerInteractionModule;