import React from 'react';
import './SoftwareTool.css';

const SoftwareTool = ({ logo, name }) => {
  return (
    <div className="software-tool">
      <img src={logo} alt={name} className="tool-logo" />
      <span className="tool-name">{name}</span>
    </div>
  );
};

export default SoftwareTool;