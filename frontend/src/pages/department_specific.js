import { useState } from "react";

const DepartmentModule = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const departmentData = {
    cs: {
      name: "Computer Science",
      students: 120,
      faculty: 10,
      activities: "Hackathon, Coding Bootcamp",
    },
    it: {
      name: "Information Technology",
      students: 100,
      faculty: 8,
      activities: "IT Conference, Software Development Workshop",
    },
    ba: {
      name: "Business Administration",
      students: 90,
      faculty: 7,
      activities: "Entrepreneurship Seminar, Marketing Competition",
    },
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Department-Specific Module</h1>
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
        <h2 className="text-xl font-bold mb-4">Department Data</h2>

        {/* Department Selection */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Select a Department</h3>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department:</label>
            <select
              id="department"
              className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300"
              onChange={(e) => setSelectedDepartment(e.target.value)}
              value={selectedDepartment}
            >
              <option value="">-- Select Department --</option>
              <option value="cs">Computer Science</option>
              <option value="it">Information Technology</option>
              <option value="ba">Business Administration</option>
            </select>
          </div>
        </section>

        {/* Department Data Display */}
        {selectedDepartment && departmentData[selectedDepartment] && (
          <section>
            <h3 className="text-lg font-semibold mb-2">Department Overview</h3>
            <div className="p-4 bg-gray-100 rounded shadow">
              <p><strong>Department:</strong> {departmentData[selectedDepartment].name}</p>
              <p><strong>Number of Students:</strong> {departmentData[selectedDepartment].students}</p>
              <p><strong>Faculty Members:</strong> {departmentData[selectedDepartment].faculty}</p>
              <p><strong>Recent Activities:</strong> {departmentData[selectedDepartment].activities}</p>
            </div>
          </section>
        )}
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

export default DepartmentModule;
