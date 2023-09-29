import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profileData && (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          {/* Add other profile information here */}
        </div>
      )}
    </div>
  );
};

export default Profile;
