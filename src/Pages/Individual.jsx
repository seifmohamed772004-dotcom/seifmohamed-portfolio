import React from 'react';
import './Individual.css'
import Nav from '../Components/Nav.jsx';
import Sec5Home from '../Common-HOME/Sec5.jsx'
import Sec6Home from '../Common-HOME/Sec6.jsx'
import Footer from '../Components/Footer.jsx';
import Sec3Cat from '../Common-Category/Sec3Cat.jsx'
import IndSec1 from '../Common-Individual/Individual-Sec-1'
const Individual = () => {
    return ( <>
    <Nav />
    <IndSec1 />
    <Sec3Cat/>
        <Sec5Home/>
        <Sec6Home/>
        <Footer/>
    </> );
}
 
export default Individual;