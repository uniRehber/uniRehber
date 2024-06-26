import React, { useState } from 'react';
import axios from 'axios';
import './commentForm.css';

const CommentForm = ({ universityId, onNewComment, onClose }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { universityId, username, comment };
    const res = await axios.post('http://localhost:8000/comments', newComment);
    onNewComment(res.data);
    setUsername('');
    setComment('');
  };

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
