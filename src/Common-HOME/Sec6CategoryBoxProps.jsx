import React from 'react';
import './Sec6CategoryBoxProps.css';

const CategoryBox = (Props) => {
  return (
    <div className={`category-box ${Props.widthClass} `}>
      <h3 className='textdec'>{Props.title}</h3>
      <p className='textdec'>{Props.projects}</p>
    </div>
  );
};
export default CategoryBox;