import React from 'react';
import './IconButton.css';

const IconButton = ({ icon, altText }) => {
  return (
    <button className="icon-btn">
      <img src={icon} alt={altText} className="icon-img" />
    </button>
  );
};

export default IconButton;