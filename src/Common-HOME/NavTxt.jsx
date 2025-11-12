import React, { Component } from 'react';
import './Navtxt.css'
import './General.css'
const Navtxt = (props) => {
    return ( 
        <h1 className='NavTxtStyle'>{props.navtxt}</h1>
     );
}
 
export default Navtxt;