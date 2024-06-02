import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post('/login', { email, password });
      if (response.data.error) {
        // Hata durumunda bir mesaj gösterme
        console.error(response.data.error);
      } else {
        // Başarılı giriş durumunda kullanıcıyı yönlendirme
        navigate('/home');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Eposta</label>
        <input type="email" placeholder="eposta_adresi@mail.com..." value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}></input>
        <label>Parola</label>
        <input type="password" placeholder="parola..." value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}></input>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}
