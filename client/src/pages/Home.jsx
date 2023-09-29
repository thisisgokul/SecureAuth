import React from 'react';
import axios from 'axios';

const Home = () => {
  const handleLogout = async () => {
    try {
      await axios.get('/api/logout'); 
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Home;
