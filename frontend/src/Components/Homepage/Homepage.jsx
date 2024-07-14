// src/components/Home.jsx

import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Home.css';

function Home() {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted movie name:', movieName);
    setMovieName('');
  };

  return (
    <div className="home-container">
      <Navbar/>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="movie-form">
          <h2>Movie Recommendation</h2>
          <input
            type="text"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            placeholder="Enter a movie name"
            required
          />
          <button type="submit">Get Recommendations</button>
        </form>
      </div>
    </div>
  );
}

export default Home;