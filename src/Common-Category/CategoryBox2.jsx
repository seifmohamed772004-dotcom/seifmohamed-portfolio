import React from 'react';
import './CategoryBox2.css';

const CategoryBox2 = (Props) => {
  return (
    <div className={`category-box2 ${Props.widthClass} `}>
      <h3 className='textdec'>{Props.Title}</h3>
    </div>
  );
};
export default CategoryBox2;