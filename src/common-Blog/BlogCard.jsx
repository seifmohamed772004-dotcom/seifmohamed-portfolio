import React from 'react';
import './BlogCard.css';

const BlogCard = ({ category, title, description, date, readTime }) => {
  return (
    <div className="blog-card">
      <div className="card-header-group">
        <span className="card-category">{category}</span>
        <h3 className="card-title">{title}</h3>
      </div>

      <p className="card-description">{description}</p>

      <div className="card-meta-section">
        <span className="meta-text">{date}</span>
        <span className="meta-separator">•</span>
        <span className="meta-text">{readTime}</span>
      </div>

      <button className="read-article-btn">
        Read Article <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default BlogCard;