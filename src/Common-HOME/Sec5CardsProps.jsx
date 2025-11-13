import React from 'react';
import './Sec5CardsProps.css';

const HIAWCards = (Props) => {
  return (
    <section className="HIAWCard">
      <h1 className='CardNumStyle'>{Props.CardNum}</h1>

      <section className="HIAWCardContent">
        <h2 className='CardTitleStyle'>{Props.CardTitle}</h2>
        <p className='CarddescStyle'>{Props.CardDesc}</p>
      </section>
    </section>
  );
};

export default HIAWCards;
