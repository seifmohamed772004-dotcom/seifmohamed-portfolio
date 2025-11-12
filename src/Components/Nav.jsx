import React, { Component } from 'react';
import Navtxt from '../Common-HOME/NavTxt';
import Logo from '../Assets/Navlogo.svg'
import './Nav.css'
import '../Common-HOME/General.css'
import NavIcon from '../Common-HOME/NavIcon';
import LanguageIcon1 from '../Assets/BehanceNavIcon.svg'
import LanguageIcon2 from '../Assets/MailNavIcon.svg'
import LanguageIcon3 from '../Assets/InstagramNavIcon.svg'
const nav = () => {
    return ( <>
<section className='NavMainSec'>



<section className='NavInnerSec'>

<img src={Logo} alt='Logo'/>


<section className='NavItems'>

<Navtxt navtxt='Projects'/>

<Navtxt navtxt='About'/>

<Navtxt navtxt='Blog'/>

<Navtxt navtxt='FAQ'/>
    
</section>


<section className='NavIconsHolding'>
<NavIcon NavIconImg={LanguageIcon2} alt=''/>
<NavIcon NavIconImg={LanguageIcon1} alt=''/>
<NavIcon NavIconImg={LanguageIcon3} alt=''/>
</section>






</section>



</section>
    </> );
}
 
export default nav;