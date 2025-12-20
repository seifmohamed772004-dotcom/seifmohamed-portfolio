import React from 'react';
import './SocialLink.css';

const SocialLink = ({ icon, label, url }) => {
  return (
    <a href={url} className="social-link-card" target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={label} className="social-icon-img" />
      {label && <span className="social-label">{label}</span>}
    </a>
  );
};

export default SocialLink;