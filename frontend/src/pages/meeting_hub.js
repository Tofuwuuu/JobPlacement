import React, { useState } from "react";

const MeetingHubModule = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Team Collaboration", date: "2025-01-20", time: "10:00 AM" },
    { id: 2, title: "Project Update", date: "2025-01-22", time: "2:00 PM" },
  ]);

  const [newMeeting, setNewMeeting] = useState({ title: "", date: "", time: "" });

  const handleInputChange = (e) => {
    setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value });
  };

  const scheduleMeeting = (e) => {
    e.preventDefault();
    if (newMeeting.title && newMeeting.date && newMeeting.time) {
      setMeetings([...meetings, { ...newMeeting, id: meetings.length + 1 }]);
      setNewMeeting({ title: "", date: "", time: "" });
    }
  };

  const cancelMeeting = (id) => {
    setMeetings(meetings.filter(meeting => meeting.id !== id));
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Meeting Hub Module</h1>
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
        <h2 className="text-xl font-bold mb-4">Meeting Hub</h2>

        {/* Meeting Scheduler */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Schedule a Meeting</h3>
          <form onSubmit={scheduleMeeting} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Meeting Title:</label>
              <input
                type="text"
                name="title"
                value={newMeeting.title}
                onChange={handleInputChange}
                placeholder="Enter meeting title"
                className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date:</label>
              <input
                type="date"
                name="date"
                value={newMeeting.date}
                onChange={handleInputChange}
                className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time:</label>
              <input
                type="time"
                name="time"
                value={newMeeting.time}
                onChange={handleInputChange}
                className="mt-1 block w-full text-sm bg-gray-50 rounded border border-gray-300"
              />
            </div>

            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Schedule</button>
          </form>
        </section>

        {/* Meeting List */}
        <section>
          <h3 className="text-lg font-semibold mb-2">Upcoming Meetings</h3>
          <ul className="space-y-4">
            {meetings.length > 0 ? (
              meetings.map(meeting => (
                <li key={meeting.id} className="p-4 bg-gray-100 rounded shadow">
                  <h4 className="font-semibold">{meeting.title}</h4>
                  <p>Date: {meeting.date}</p>
                  <p>Time: {meeting.time}</p>
                  <button
                    onClick={() => cancelMeeting(meeting.id)}
                    className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </li>
              ))
            ) : (
              <p>No meetings scheduled.</p>
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

export default MeetingHubModule;