// code is there in phone pictures

import './App.css'; 

import React from 'react';
import Home from './components/Home';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [movies, setMovies] = useState([]); // State for recommended movies

  // Simulate fetching recommendations on search term change (replace with API call)
  useEffect(() => {
    if (searchTerm) {
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
      <Navbar />
      <Home
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        movies={movies}
      />
    </div>
  );
}

export default App;
