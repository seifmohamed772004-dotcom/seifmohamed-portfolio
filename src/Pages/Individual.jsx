import React from 'react';
import './Individual.css'
import Nav from '../Components/Nav.jsx';
import Sec5Home from '../Common-HOME/Sec5.jsx'
import Sec6Home from '../Common-HOME/Sec6.jsx'
import Footer from '../Components/Footer.jsx';
import Sec3Cat from '../Common-Category/Sec3Cat.jsx'
const Individual = () => {
    return ( <>
    <Nav/>
    <Sec3Cat/>
        <Sec5Home/>
        <Sec6Home/>
        <Footer/>
    </> );
}
 
export default Individual;