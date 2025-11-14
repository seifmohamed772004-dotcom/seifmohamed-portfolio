import React from 'react';
import TopTitleComp from './TopTitleProps'
import CategoryBox from './Sec6CategoryBoxProps'
import './Sec6.css'
const Sec6Home = () => {
    return ( <>

    <section className='Sec6Main'>
        <TopTitleComp title="CAN'T" titlespan='find what you need?'/>

    <div className="sec6-container">
      <div className="sec6-row">
        <CategoryBox title="UX/UI DESIGN" projects="4 Projects" widthClass="width-large" />
        <CategoryBox title="VIDEO EDITING" projects="4 Projects" widthClass="width-large" />
        <CategoryBox title="PHOTOGRAPHY" projects="4 Projects" widthClass="width-medium" />
      </div>
      <div className="sec6-row">
        <CategoryBox title="MOTION GRAPHICS" projects="4 Projects" widthClass="width-large" />
        <CategoryBox title="3D MODELING" projects="4 Projects" widthClass="width-medium" />
        <CategoryBox title="BRANDING" projects="4 Projects" widthClass="width-medium" />
      </div>
      <div className="sec6-row">
        <CategoryBox title="GRAPHIC DESIGN" projects="4 Projects" widthClass="width-medium" />
        <CategoryBox title="XR DESIGN" projects="4 Projects" widthClass="width-medium" />
        <CategoryBox title="PHOTO EDITING" projects="4 Projects" widthClass="width-large" />
      </div>
    </div>

</section>

    </> );
}
 
export default Sec6Home;