import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, category, title }) => {
  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      
      <div className="card-content">
        <div className="card-category-wrapper">
          <span className="card-category">{category}</span>
        </div>
        
        <h3 className="card-title">{title}</h3>
        
        <div className="card-footer">
          <button className="visit-btn">Visit Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;