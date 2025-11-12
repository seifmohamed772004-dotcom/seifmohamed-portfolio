import React from 'react';
import './BorderButtonProp.css';

const BBP = (Props) => {
  return (
    <button className='BorderButton'>
      {Props.Btntitle}
      {Props.Btnimg && <img src={Props.Btnimg} alt='' className='BtnIcon' />}
    </button>
  );


};
export default BBP;