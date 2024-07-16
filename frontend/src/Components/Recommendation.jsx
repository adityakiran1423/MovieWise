import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import theaterImage from '../img/theater1.jpg';

const Recommendation = () => {
  const [movieName, setMovieName] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setMovieName(event.target.value);
  };

//   const data = {
//     places: formData,
//     time: Date.now(),
//     type: additionalInput.trim() !== "" ? additionalInput : null,
//   };
    const data = ''

  const handleSubmit = async () => {
    try {
      // const response = await axios.post('http://127.0.0.1:5000/submit', { movieName });
      const response = await axios.post("http://127.0.0.1:5000/submit", data);
      setRecommendations(response.data.movie_details);
      setErrorMessage("");
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <Container>
      <h1>Movie Recommendations</h1>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Enter a movie name"
          value={movieName}
          onChange={handleInputChange}
        />
        <SubmitButton onClick={handleSubmit}>Get Recommendations</SubmitButton>
      </InputWrapper>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {recommendations.length > 0 && (
        <RecommendationsList>
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation.name}: {recommendation.description}</li>
            ))}
          </ul>
        </RecommendationsList>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url(${theaterImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #850615;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #850615;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

const RecommendationsList = styled.div`
  margin-top: 20px;
  text-align: left;

  h2 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

export default Recommendation;

