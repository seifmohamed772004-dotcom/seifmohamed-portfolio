import React from 'react';
import './WhiteButtonProp2.css';

const WBP = (Props) => {
  return (
    <button className='WhiteButton'>
      {Props.Btntitle}
    </button>
  );
};

export default WBP;