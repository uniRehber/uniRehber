import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ universityId, onNewComment }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { universityId, username, comment };
    const res = await axios.post('http://localhost:8000/api/comments', newComment);
    onNewComment(res.data);
    setUsername('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
