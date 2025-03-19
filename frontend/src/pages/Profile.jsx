// src/pages/Profile.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    graduationYear: '',
    skills: [],
  });

  useEffect(() => {
    // Fetch profile data from API
    axios.get('/api/profile').then(res => setProfile(res.data));
  }, []);

  return (
    <div className="profile">
      <h1>{profile.name}</h1>
      <div className="details">
        <p>Graduated: {profile.graduationYear}</p>
        <div className="skills">
          {profile.skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}