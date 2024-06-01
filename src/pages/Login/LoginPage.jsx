import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada gerçekleştirilebilir
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegisterClick = () => {
    navigate('/registerpage'); // Kayıt sayfasına yönlendirme
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş Yap</button>
        <h3>Henüz üye değil misin? Kayıt Ol!</h3>
        <button onClick={handleRegisterClick}>Kayıt Ol</button>
      </form>
    </div>
  );
};

