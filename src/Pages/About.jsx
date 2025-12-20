import React from 'react';
import Nav from '../Components/Nav';
import Sec4Home from '../Common-HOME/Sec4.jsx'
import StaticPropsMarquee from '../Common-HOME/Marquee.jsx'
import Sec2Home from '../Common-HOME/Sec2.jsx'
import Sec5Home from '../Common-HOME/Sec5.jsx'

import Footer from '../Components/Footer';
const About = () => {
    return ( <>
        <Nav/>
<Sec4Home/>
        <StaticPropsMarquee/>
        <Sec2Home/>
<Sec5Home/>
        <Footer/>
    </> );
}
 
export default About;