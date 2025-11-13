import React from 'react';
import './TopTitleProps.css'
import Toprightlogo from '../Assets/Logo Big@3x.png'
const TopTitleComp = (Props) => {
    return ( <>

        <section className='TopTitleMain'>



            <h1 className='TopTitleTxt'>
            {Props.title}
            <span className='TopTitleSmallTxt'> {Props.titlespan}</span>
            </h1>


            <section className='TopTitleLineDiv'></section>

            <img src={Toprightlogo} alt='' className='TopTitleImg'/>



        </section>

    </> );
}
 
export default TopTitleComp;