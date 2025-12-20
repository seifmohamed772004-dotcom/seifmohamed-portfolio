import React from 'react';
import Nav from '../Components/Nav';
import Sec1About from '../Common-About/Sec1About.jsx'
import StaticPropsMarquee from '../Common-HOME/Marquee.jsx'
import Sec2Home from '../Common-HOME/Sec2.jsx'
import Sec5Home from '../Common-HOME/Sec5.jsx'

import Footer from '../Components/Footer';
const About = () => {
    return ( <>
        <Nav/>
        <section className='holdingSec'>
<Sec1About/>
</section>
        <StaticPropsMarquee/>
        <Sec2Home/>
<Sec5Home/>
        <Footer/>
    </> );
}
 
export default About;