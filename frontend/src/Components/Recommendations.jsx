// actually being used

import React, { useState } from 'react';
import theaterImage from '../img/theater1.jpg';

const Recommendations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    // Inject the HTML content directly into the DOM
    document.body.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Movie Recommendations</title>
          <style>
              body {
                  background-image: url('/theater1.jpg'); // if backgroung image doesn't show up add theater1 to public folder
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f0f0f0;
              }
              .navbar {
                  background-color: #000000;
                  padding: 1rem 2rem;
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  z-index: 1000;
              }
              .nav-links {
                  list-style-type: none;
                  padding: 0;
                  margin: 0;
                  display: flex;
              }
              .nav-links li {
                  margin-right: 1.5rem;
              }
              .nav-links a {
                  color: #850611;
                  text-decoration: none;
                  font-size: 1rem;
              }
              .nav-links a:hover {
                  color: #850611;
              }
              .content {
                  padding-top: 70px;
                  margin: 0 auto;
                  max-width: 800px;
              }
              .movie-title {
                  font-size: 24px;
                  color: #333;
                  margin-top: 20px;
                  margin-bottom: 10px;
              }
              .movie-suggestion {
                  background-color: white;
                  border-radius: 8px;
                  padding: 20px;
                  margin-bottom: 20px;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .movie-suggestion h3 {
                  margin-top: 0;
                  color: #850611;
              }
              .movie-suggestion p {
                  margin: 5px 0;
              }
              .genre {
                  font-style: italic;
                  color: #666;
              }
          </style>
      </head>
      <body>
          <nav class="navbar">
              <ul class="nav-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#recommendations">Recommendations</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#login">Login</a></li>
              </ul>
          </nav>

          <div class="content">
              <h2 class="movie-title">Suggestions for Inception</h2>

              <div class="movie-suggestion">
                  <h3>The Matrix</h3>
                  <p class="genre">Genre: Sci-Fi, Action</p>
                  <p>A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to overthrow them.</p>
              </div>

              <div class="movie-suggestion">
                  <h3>Shutter Island</h3>
                  <p class="genre">Genre: Mystery, Thriller</p>
                  <p>A U.S. Marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane, uncovering a web of deception.</p>
              </div>

              <div class="movie-suggestion">
                  <h3>Memento</h3>
                  <p class="genre">Genre: Mystery, Thriller</p>
                  <p>A man with short-term memory loss attempts to track down his wife's murderer using notes and tattoos to aid his memory.</p>
              </div>

              <div class="movie-suggestion">
                  <h3>Interstellar</h3>
                  <p class="genre">Genre: Sci-Fi, Adventure</p>
                  <p>A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>
              </div>

              <div class="movie-suggestion">
                  <h3>The Prestige</h3>
                  <p class="genre">Genre: Drama, Mystery</p>
                  <p>Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.</p>
              </div>
          </div>
      </body>
      </html>
    `;
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter a movie name"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(/theater1.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Recommendations;
