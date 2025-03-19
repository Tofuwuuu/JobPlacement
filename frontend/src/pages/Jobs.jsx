import { useState } from 'react';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(newJob).every(val => val.trim() !== '')) {
      alert('Please fill all fields');
      return;
    }
    setJobs([...jobs, { ...newJob, id: Date.now() }]);
    setNewJob({
      title: '',
      company: '',
      location: '',
      salary: '',
      description: '',
      requirements: ''
    });
  };

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Job Posting Form */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Post New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                name="title"
                value={newJob.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={newJob.company}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={newJob.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Salary</label>
              <input
                type="text"
                name="salary"
                value={newJob.salary}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={newJob.description}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Requirements</label>
            <textarea
              name="requirements"
              value={newJob.requirements}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Post Job
          </button>
        </form>
      </section>

      {/* Job Listings */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Job Openings</h2>
        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
              <div className="mt-2 text-gray-600">
                <p className="font-medium">{job.company}</p>
                <p>{job.location}</p>
                <p className="text-green-700 font-medium">{job.salary}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">Description:</h4>
                <p className="text-gray-600">{job.description}</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">Requirements:</h4>
                <p className="text-gray-600">{job.requirements}</p>
              </div>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}