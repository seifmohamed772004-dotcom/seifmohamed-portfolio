import React from 'react';
import './Blog-Sec1.css';
import WBP from '../Common-HOME/WhiteButtonProp.jsx';
const BlogSec1 = () => {
  return (
    <div className="blog-hero-container">
      

      <div className="welcome-badge">
        <span className="badge-text">Welcome to the Archive</span>
      </div>

      <h1 className="hero-title">
        Insights, Experiments &<br />
        Design Thinking
      </h1>

      <p className="hero-description">
        Thoughts on UX, branding, digital experiences, and creative process.<br />
        A collection of ideas exploring the intersection of design and technology.
      </p>

      <div className="hero-button-wrapper">
     <WBP Btntitle='Explore Articles' />
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
      
    </div>
  );
};

export default BlogSec1;