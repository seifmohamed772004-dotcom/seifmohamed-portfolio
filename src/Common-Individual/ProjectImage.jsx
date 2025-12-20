import React from 'react';
import './ProjectImage.css';

const ProjectImage = ({ imageSrc, altText }) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt={altText} className="project-display-img" />
    </div>
  );
};

export default ProjectImage;