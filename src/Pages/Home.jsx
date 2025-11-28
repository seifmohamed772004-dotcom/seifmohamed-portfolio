import React from 'react';
import Nav from '../Components/Nav.jsx';
import Sec1Home from '../Common-HOME/Sec1.jsx';
import './Home.css';
import StaticPropsMarquee from '../Common-HOME/Marquee.jsx'
import Sec2Home from '../Common-HOME/Sec2.jsx'
import Sec3Home from '../Common-HOME/Sec3.jsx'
import Sec4Home from '../Common-HOME/Sec4.jsx'
import Sec5Home from '../Common-HOME/Sec5.jsx'
import Sec6Home from '../Common-HOME/Sec6.jsx'
import Footer from '../Components/Footer.jsx';



const Home = () => {
  return (
    <>
      <Nav />
      <Sec1Home />
      <StaticPropsMarquee />
      <Sec2Home/>
<Sec3Home/>
      <Sec4Home/>
      <Sec5Home/>
      <Sec6Home/>
      <Footer/>
    </>
  );
};

export default Home;