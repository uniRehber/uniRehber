import React from 'react';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Giriş Yap</h1>
        <div className='input-box'>
          <input type='text' placeholder='username' required />
        </div>
        <div className="input-box">
          <input type='text' placeholder='*******' required />
        </div>
        <div className="remember-forget">
          <label><input type='checkbox'/>Beni Hatırla!</label>
          <a href='#'>Parolamı unuttum </a>
        </div>
        <button type='submit'>Login</button>

        <div className="registerlink">
          <p>Hesabınız yok mu? Hemen kayıt olun!<a href='#'>Register</a></p>
        </div>
      </form>
    </div>
  )
}
