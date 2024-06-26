import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Profile.css'; 

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${id}`);
        setUser(response.data);
        setProfileImage(response.data.profilePicture); // Varsayılan profil resmini ayarla
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Kullanıcı bilgileri alınırken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageSave = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePicture', profileImage);

      await axios.put(`http://localhost:8000/users/${id}/profile-picture`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profil resmi güncellendi.');
    } catch (error) {
      console.error('Error updating profile picture:', error);
      alert('Profil resmi güncellenirken bir hata oluştu.');
    }
  };

  if (loading) {
    return <div className="profile-container loading-message">Loading...</div>;
  }

  if (error) {
    return <div className="profile-container error-message">{error}</div>;
  }

  if (!user) {
    return <div className="profile-container">Kullanıcı bulunamadı.</div>;
  }

  return (
    <div className="profile-container">
      <h2>Profil Bilgileri</h2>
      <div>
        <img src={profileImage} alt="Profil Resmi" className="profile-image" />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleImageSave}>Profil Resmini Kaydet</button>
        <h3>{user.name}</h3>
        <div className="info-item">
          <p><strong>E-posta:</strong> {user.email}</p>
          <p><strong>Biyografi:</strong> {user.bio}</p>
          <p><strong>Envanter:</strong> {user.envanter}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
