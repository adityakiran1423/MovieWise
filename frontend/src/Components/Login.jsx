import React, { useState } from 'react';
import styled from 'styled-components';
import theaterImage from '../img/theater1.jpg';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Check if username and password match the default credentials
    if (username === 'aditya' && password === '1234') {
      setLoggedIn(true);
      setError('');
      // Store username and password securely (e.g., in localStorage)
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      setLoggedIn(false);
      setError('Login failed. Please check your username and password.');
      // Clear stored credentials if login fails
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  };

  const handleLogout = () => {
    // Clear stored credentials and logout
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setLoggedIn(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      {!loggedIn ? (
        <LoginForm>
          <h2>Login</h2>
          <FormInput>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </FormInput>
          <FormInput>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </FormInput>
          {error && <ErrorText>{error}</ErrorText>}
          <Button onClick={handleLogin}>Login</Button>
          <SignupLink onClick={() => alert('Redirect to signup page')}>Sign Up</SignupLink>
        </LoginForm>
      ) : (
        <LoggedInSection>
          <h2>Welcome, {username}!</h2>
          <Button onClick={handleLogout}>Logout</Button>
        </LoggedInSection>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${theaterImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const LoginForm = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormInput = styled.div`
  margin-bottom: 10px;

  label {
    font-weight: bold;
  }

  input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignupLink = styled.span`
  cursor: pointer;
  color: #007bff;
  margin-top: 10px;
  display: block;
`;

const LoggedInSection = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export default Login;
