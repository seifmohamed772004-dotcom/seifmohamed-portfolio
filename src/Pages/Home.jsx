import React from 'react';
import Nav from '../Components/Nav.jsx';
import Sec1Home from '../Common-HOME/Sec1.jsx';
import './Home.css';
import StaticPropsMarquee from '../Common-HOME/Marquee.jsx'
import Sec2Home from '../Common-HOME/Sec2.jsx'




const Home = () => {
  return (
    <>
      <Nav />
      <Sec1Home />
      <StaticPropsMarquee />
      <Sec2Home/>
    </>
  );
};

export default Home;