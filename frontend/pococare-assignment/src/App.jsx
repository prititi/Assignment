// import { BrowserRouter } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8500/login', { email, password });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token);
      setMessage('');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleProtectedRoute = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('No token, authorization denied');
      return;
    }

    try {
      const response = await axios.get('http://localhost:8500/protected', {
        headers: { Authorization: token },
      });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response.status === 401) {
        handleTokenRefresh();
      } else {
        setMessage(error.response.data.message);
      }
    }
  };

  const handleTokenRefresh = () => {
    setMessage('Token refresh failed. Redirecting to login...');
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleProtectedRoute}>Protected Route</button>
      <div>{message}</div>
    </div>
  );
}

export default App;
