import React from 'react';
import { useNavigate } from 'react-router-dom';
import url from 'url';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş işlemleri burada gerçekleştirilebilir
    navigate('/loginpage'); // LoginPage sayfasına yönlendirme yapılıyor
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      border: '2px solid rgba(255, 255, 255, .2)',
      backdropFilter: 'blur(30px)',
      boxShadow: '0 0 10px rgba(0, 0, 0, .2)',
      color: '#fff',
      width: '420px',
      borderRadius: '10px',
      padding: '30px 40px',
      fontFamily: 'Poppins, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#555555',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <form onSubmit={handleLogin}>
        <h1>Giriş Yap</h1>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '50px',
          backgroundColor: '#fff',
          margin: '30px 0'
        }}>
          <input type='text' placeholder='username' required />
        </div>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '50px',
          backgroundColor: '#fff',
          margin: '30px 0'
        }}>
          <input type='password' placeholder='*******' required />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14.5px',
          margin: '-15px 0 15px'
        }}>
          <label>
            <input type='checkbox' />Beni Hatırla!
          </label>
          <a href='#'>Parolamı unuttum</a>
        </div>
        <button type='submit'>Login</button>

        <div style={{
          fontSize: '14.5px',
          textAlign: 'center',
          margin: '20px 0 15px'
        }}>
          <p>
            Hesabınız yok mu? Hemen kayıt olun!
            <a href='#'>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};
