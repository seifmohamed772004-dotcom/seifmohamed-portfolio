import React from 'react';
import Nav from '../Components/Nav.jsx';
import Sec1Home from '../Common-HOME/Sec1.jsx';
import './Home.css';
import StaticPropsMarquee from '../Common-HOME/Marquee.jsx'
import Sec2Home from '../Common-HOME/Sec2.jsx'
import Sec4Home from '../Common-HOME/Sec4.jsx'
import Sec5Home from '../Common-HOME/Sec5.jsx'



const Home = () => {
  return (
    <>
      <Nav />
      <Sec1Home />
      <StaticPropsMarquee />
      <Sec2Home/>
      {/* Sec 3 Lesa mat3amaletsh dy btaaet el featured project fa e3melha w add makan el comment */}
      <Sec4Home/>
      <Sec5Home/>
    </>
  );
};

export default Home;