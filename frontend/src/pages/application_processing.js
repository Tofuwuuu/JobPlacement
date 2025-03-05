import React from "react";

const RequestProcessingModule = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Application/Request Processing Module</h1>
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
        <h2 className="text-xl font-bold mb-4">Application and Request Processing</h2>

        {/* Application Form */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Submit a Request</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="request-type" className="block text-sm font-medium text-gray-700">Request Type:</label>
              <select id="request-type" name="request-type" className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300">
                <option value="">-- Select Request Type --</option>
                <option value="document">Document Request</option>
                <option value="application">Application Submission</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
              <textarea id="description" name="description" rows="4" placeholder="Provide a brief description" className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300"></textarea>
            </div>

            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Submit</button>
          </form>
        </section>

        {/* Request Status */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Request Status</h3>
          <ul className="space-y-4">
            <li className="p-4 bg-gray-100 rounded shadow">
              <h4 className="font-semibold">Document Request</h4>
              <p>Status: <span className="text-green-600">Approved</span></p>
              <p>Description: Request for transcript of records.</p>
            </li>
            <li className="p-4 bg-gray-100 rounded shadow">
              <h4 className="font-semibold">Application Submission</h4>
              <p>Status: <span className="text-yellow-600">Pending</span></p>
              <p>Description: Submission of job application form.</p>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 CvSU Alumni Verification System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RequestProcessingModule;
