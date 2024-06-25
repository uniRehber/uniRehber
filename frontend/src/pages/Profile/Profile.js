// // import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Profile.css'; // Profil sayfasına özel stil dosyası

// const Profile = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/user/${id}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
//         setError('Kullanıcı bilgileri alınırken bir hata oluştu.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   if (loading) {
//     return <div>Yükleniyor...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!user) {
//     return <div>Kullanıcı bulunamadı.</div>;
//   }

//   const handleLogout = () => {
//     // Çıkış yapma işlemi (örneğin, oturum sonlandırma)
//     navigate('/login');
//   };

//   return (
//     <div className="profile-container">
//       <h1>Hoş geldiniz, {user.name}</h1>
//       <img src="/path_to_default_avatar_image" alt="Profil Resmi" className="profile-image" />
//       <p>Email: {user.email}</p>
//       <p>Katılım Tarihi: {new Date(user.createdAt).toLocaleDateString()}</p>
//       <button onClick={handleLogout}>Çıkış Yap</button>
//       {/* Kullanıcı bilgilerini güncelleme formu veya bileşenleri buraya eklenebilir */}
//     </div>
//   );
// };

// export default Profile;
