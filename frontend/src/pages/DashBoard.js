import React from "react";

const AlumniDashboard = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">CvSU Alumni Verification System</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Help</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* Main Container */}
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-200 p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold">User Dashboard</h2>
            <p className="text-gray-600">Welcome, [User Name]</p>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700 hover:text-blue-700">Dashboard</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-700">Job Listings</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-700">Notifications</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-700">Settings</a></li>
          </ul>
        </aside>
        
        {/* Main Content */}
        <main className="w-full md:w-3/4 bg-white p-6 shadow">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          
          {/* Document Upload Section */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Document Upload</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="document" className="block text-sm font-medium text-gray-700">Upload your document:</label>
                <input type="file" id="document" name="document" className="mt-1 block w-full text-sm text-gray-500 bg-gray-50 rounded border border-gray-300" />
              </div>
              <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Upload</button>
            </form>
          </section>
          
          {/* Job Listings Section */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Job Listings</h3>
            <ul className="space-y-4">
              <li className="p-4 bg-gray-100 rounded shadow">
                <h4 className="font-semibold">Software Engineer</h4>
                <p>Company: Tech Corp</p>
                <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">Apply</button>
              </li>
              <li className="p-4 bg-gray-100 rounded shadow">
                <h4 className="font-semibold">Data Analyst</h4>
                <p>Company: Analytics Co</p>
                <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">Apply</button>
              </li>
            </ul>
          </section>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 CvSU Alumni Verification System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AlumniDashboard;