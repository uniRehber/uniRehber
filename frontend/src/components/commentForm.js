import React, { useState } from 'react';
import axios from 'axios';
import './commentForm.css';
import { toast } from 'react-toastify';


const CommentForm = ({ universityId, onNewComment, onClose }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { universityId, username, comment };

    try {
      const res = await axios.post('http://localhost:8000/comments', newComment);
      onNewComment(res.data);
      setUsername('');
      setComment('');
      toast.success('Yorum kaydedildi!'); // Başarılı bildirim
    } catch (error) {
      console.error('Error adding comment:', error);
      toast.error('Yorum eklenirken bir hata oluştu.'); // Hata bildirimi
    }
  };
  //   try{
  //   const res = await axios.post('http://localhost:8000/comments', newComment);
  //   onNewComment(res.data);
  //   setUsername('');
  //   setComment('');
  //   toast.success('Yorum kaydedildi!'); // Başarılı bildirim
  //   } catch (error) {
  //     console.error('Error adding comment:', error);
  //     toast.error('Yorum eklenirken bir hata oluştu.'); // Hata bildirimi
  //   }
  // };

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kullanıcı:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Yorum:</label>
          <textarea 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default CommentForm;
