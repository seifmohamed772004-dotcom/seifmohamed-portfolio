import React from 'react';
import Sec3Card from './Sec3CatCard';
import './Sec3Cat.css';
import C1 from '../Assets/RecentIMG1hovered.png'
import C2 from '../Assets/RecentIMG2hovered.png'
import C3 from '../Assets/RecentIMG3hovered.png'


const Sec3Home = () => {
    return (

<div className="sec3-container">

     <div className="sec3-header">
           <h1 className="sec3-title">RECENT <span className="sec3-title-thin">Projects?</span></h1>
    </div>

 <div className="sec3-grid">
                
   
                <Sec3Card 
                    imgSrc={C1}
                    title="MAIN"
                    subtitle="Local Egyptian Clothing Brand"
                    category="Branding"
                    date="02-12-2023"
                />

     
                <Sec3Card 
        imgSrc={C2}  
                          title="RUBY's"
                    subtitle="Local Egyptian Food Brand"
                    category="Branding"
                    date="07-11-2025"
                />

                <Sec3Card 
        imgSrc={C3}   
                         title="MAIN's Glass Model"
                    subtitle="Local Egyptian Clothing Brand"
                    category="3D Modelling"
                    date="07-11-2025"
                />

            </div>

            <button className="sec3-view-all-btn">
                View All Projects!
            </button>
        </div>
    );
};

export default Sec3Home;