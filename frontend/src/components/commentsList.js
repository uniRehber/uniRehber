import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CommentsList = ({ universityId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`http://localhost:8000/comments/${universityId}`);
      setComments(res.data);
    };
    fetchComments();
  }, [universityId]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment._id}>
          <h4>{comment.username}</h4>
          <p>{comment.comment}</p>
          <small>{new Date(comment.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
