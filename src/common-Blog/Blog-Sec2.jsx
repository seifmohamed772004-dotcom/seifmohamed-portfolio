import React from 'react';
import './Blog-Sec2.css';
import BlogCard from './BlogCard';

const BlogSec2 = () => {
  return (
    <div className="blog-sec2-main">
      <div className="featured-header">
        <div className="accent-line"></div>
        <span className="featured-label">Featured</span>
      </div>

      {/* Top Section: Wide Card */}
      <div className="wide-card">
        <div className="wide-card-header">
          <h2 className="wide-title">The Evolution of Design Systems in Modern Web Applications</h2>
          <div className="wide-meta-row">
            <span className="wide-category">UX Design</span>
            <span className="wide-date">Dec 15, 2025 • 8 min read</span>
          </div>
        </div>
        
        <p className="wide-description">
          Exploring how design systems have transformed from simple style guides to 
          comprehensive ecosystems that power entire product families.
        </p>

        <button className="read-article-btn-wide">
          Read Article <span className="arrow">→</span>
        </button>
      </div>

      {/* Bottom Section: Three Cards */}
      <div className="cards-grid-row">
        <BlogCard 
          category="Frontend"
          title="Crafting Micro-Interactions That Feel Alive"
          description="Small details that create memorable user experiences"
          date="Dec 15, 2025"
          readTime="8 min read"
        />
        <BlogCard 
          category="Branding"
          title="Brand Identity in the Age of AI"
          description="Maintaining authenticity while leveraging new tools"
          date="Dec 15, 2025"
          readTime="8 min read"
        />
        <BlogCard 
          category="UX Design"
          title="Designing for Emotion: Beyond Usability"
          description="Creating experiences that resonate on a deeper level"
          date="Dec 15, 2025"
          readTime="8 min read"
        />
      </div>
    </div>
  );
};

export default BlogSec2;