import React from 'react';
import './TimeCard.css';

const TimeCard = ({ value, label }) => {
  return (
    <div className="time-card">
      <span className="time-value">{value}</span>
      <span className="time-label">{label}</span>
    </div>
  );
};

export default TimeCard;