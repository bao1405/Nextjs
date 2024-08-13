import React from 'react';
import './components/Popup.scss'
const DeleteBlogPost = () => {
    return (
      <div className="delete-blog-post">
        <div className="icon">
          <span className="material-icons">warning</span>
        </div>
        <h2>Delete blog post</h2>
        <p>Are you sure you want to delete this post? This action cannot be undone.</p>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    );
  };
  
  export default DeleteBlogPost;