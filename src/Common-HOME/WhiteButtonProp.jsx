import React from 'react';
import './WhiteButtonProp.css';

const WBP = (Props) => {
  return (
    <button className='WhiteButton'>
      {Props.Btntitle}
    </button>
  );
};

export default WBP;