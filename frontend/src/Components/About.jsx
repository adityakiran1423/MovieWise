import React from 'react';
import './About.css'; // Assuming a CSS file named AboutUs.css
import theaterImage from '../img/theater1.jpg';

const About = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MovieWise Pricing</title>
        <style>
          {`
        body {
            background-image: url(${theaterImage});
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
            line-height: 1.6;
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
            color: white;
            text-decoration: none;
            font-size: 1rem;
        }
        .nav-links a:hover {
            color: #850611;
        }
        .content {
            padding-top: 80px;
            margin: 0 auto;
            max-width: 800px;
            padding-left: 20px;
            padding-right: 20px;
        }
        h1 {
            color: white;
            font-size: 3.0em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.5em;
            color: white;
            margin-bottom: 20px;
        }
        `}
    </style>
    </head>
    <body>
    <div class="content">
        <h1>About MovieWise</h1>
        <p>
            Unleash your inner cinephile. <br/>Discover personalized movie recommendations.<br/> Explore hidden gems, and delve deeper into the world of cinema. <br/>Never run out of movies to love. Go beyond the ordinary.
        </p>
    </div>
</body>
</html>
  );
};


export default About;
