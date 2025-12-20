import React from 'react';
import './Sec1About.css'
import TopTitleComp from '../Common-HOME/TopTitleProps'
import IllustratedIMG from '../Assets/sec3image.png'
const Sec4Home = () => {
    return ( <>
    <section className='Sec4Main'>
    <TopTitleComp title='WHO' titlespan='am I?'/>



<section className='Sec4Bottom'>

<section className='Sec4BottomLeft'>
    <h1 className='Sec4BottomLeftTitle'>Need to elevate your End User’s Experience?</h1>
    <p className='Sec4BottomLeftdesc'>Hi, I am Seif, a 21-Year-Old UX Designer. After four years through this amazing field, I gradually started sensing the user’s needs. UX Designing became my passion, boosting the User Experience became my goal.</p>
</section>




<img src={IllustratedIMG} alt=''/>




</section>


    </section>

    </> );
}
 
export default Sec4Home;