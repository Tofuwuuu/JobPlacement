import React from 'react';

const AdminControlModule = () => {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            {/* Header */}
            <header className="bg-blue-700 text-white shadow">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-2xl font-bold">Admin Control Module</h1>
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
                <h2 className="text-xl font-bold mb-4">Administrative Controls</h2>

                {/* User Management */}
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">User Management</h3>
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">User ID</th>
                                <th className="border border-gray-300 p-2">Name</th>
                                <th className="border border-gray-300 p-2">Role</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[{ id: 1, name: "John Doe", role: "Alumni" }, { id: 2, name: "Jane Smith", role: "Employer" }].map(user => (
                                <tr key={user.id}>
                                    <td className="border border-gray-300 p-2">{user.id}</td>
                                    <td className="border border-gray-300 p-2">{user.name}</td>
                                    <td className="border border-gray-300 p-2">{user.role}</td>
                                    <td className="border border-gray-300 p-2">
                                        <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* System Logs */}
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">System Logs</h3>
                    <ul className="space-y-4">
                        {[{ time: "2025-01-17 10:00 AM", action: "User John Doe updated their profile." },
                          { time: "2025-01-17 11:30 AM", action: "Admin deleted user Jane Smith." }].map((log, index) => (
                            <li key={index} className="p-4 bg-gray-100 rounded shadow">
                                <p><strong>Time:</strong> {log.time}</p>
                                <p><strong>Action:</strong> {log.action}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* System Settings */}
                <section>
                    <h3 className="text-lg font-semibold mb-2">System Settings</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Setting 1:</label>
                            <input type="text" placeholder="Enter value" className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Setting 2:</label>
                            <input type="text" placeholder="Enter value" className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300" />
                        </div>
                        <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Save Settings</button>
                    </form>
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

export default AdminControlModule;