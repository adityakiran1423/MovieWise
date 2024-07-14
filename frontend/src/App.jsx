import './App.css'; 

import React, {useState, useEffect} from 'react';
import Home from './Components/Homepage';
import Navbar from './Components/Navbar';

import backgroundImage from './img/theater1.jpg';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [movies, setMovies] = useState([]); // State for recommended movies

  
  useEffect(() => {
    if (searchTerm) {
      // Simulate fetching recommendations on search term change (replace with API call)
      const fetchRecommendations = async () => {
        const response = await fetch(`https://api.example.com/movies?q=${searchTerm}`); // Replace with your API endpoint
        const data = await response.json();
        setMovies(data.recommendations); // Assuming the API response has a "recommendations" property
      };
      fetchRecommendations();
    } else {
      setMovies([]); // Clear recommendations if search term is empty
    }
  }, [searchTerm]); // Re-run effect whenever searchTerm changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <div className="background-container" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Navbar />
      <Home
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        movies={movies}
      />
      </div>
    </div>
  );
}

export default App;
