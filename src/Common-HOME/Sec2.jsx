import React from 'react';
import WBP from '../Common-HOME/WhiteButtonProp.jsx';
import './Sec2.css'
import Showreel from '../Assets/Showreel.mp4'
const Sec2 = () => {
    return ( <>
        <section className='Sec2Main'>


<section className='Sec2Left'>

<section className='Sec2LeftTop'>

<h1 className='Sec2Title'>See My Work In Action</h1>
<p className='Sec2Desc'>Watch a curated showcase of my creative process
and featured projects</p>

</section>

     <WBP Btntitle='Create Together!' />

</section>



<video src={Showreel} type="video/mp4" controls className='ShowreelVideo'/>




        </section>
    </> );
}
 
export default Sec2;