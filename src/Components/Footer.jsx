import React from 'react';
import './Footer.css'
import HUE from '../Assets/Hope You Enjoyed.png'
import DL from '../Assets/Double Logo.png'
import WBP from '../Common-HOME/WhiteButtonProp.jsx';
import BBP from '../Common-HOME/BorderButtonProp.jsx';
import PlayImg from '../Assets/playicon.png'
const Footer = () => {
    return ( <>
        <section className='FooterMain'>

<section className='FooterInside'>

<section className='FooterContSec'>
<img src={HUE} alt='' className='HUEimg'/>

<section className='FooterCenterContent'>

<img src={DL} alt='' className='DLimg'/>

<h1 className='FooterTXT'>FILLING THE LAST PIECE FOR<br></br>YOUR SUCCESS</h1>

</section>


<section className='FootorBottomSection'>

  <WBP Btntitle='Create Together!' />
    <BBP Btntitle='Watch Demo' Btnimg={PlayImg} />


</section>
</section>



</section>

        </section>
    </> );
}
 
export default Footer;