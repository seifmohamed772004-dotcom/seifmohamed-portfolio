import React from 'react';
import './Sec6CategoryBoxProps.css';

const CategoryBox = (Props) => {
  return (
    <div className={`category-box ${Props.widthClass}`}>
      <h3>{Props.title}</h3>
      <p>{Props.projects}</p>
    </div>
  );
};
export default CategoryBox;