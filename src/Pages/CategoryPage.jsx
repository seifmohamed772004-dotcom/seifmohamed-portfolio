import React from 'react';
import './CategoryPage.css'
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav.jsx';
import StaticPropsMarquee from '../Common-HOME/Marquee.jsx'
import Sec2Home from '../Common-HOME/Sec2.jsx'
import Sec4Home from '../Common-HOME/Sec4.jsx'
import Sec5Home from '../Common-HOME/Sec5.jsx'
import Sec6Home from '../Common-HOME/Sec6.jsx'
import Footer from '../Components/Footer.jsx';
import Sec1Cat from '../Common-Category/Sec1Cat.jsx'
import Sec3Home from '../Common-HOME/Sec3.jsx'

const CategoryPage = () => {
    return ( <>
        <Nav />
<Sec1Cat/>
        <StaticPropsMarquee />
      <Sec3Home/>
      <Sec2Home/>
      <Sec4Home/>
      <Sec5Home/>
      <Sec6Home/>
      <Footer/>
    </> );
}
 
export default CategoryPage;