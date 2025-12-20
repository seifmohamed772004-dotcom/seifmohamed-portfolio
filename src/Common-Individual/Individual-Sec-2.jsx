import React from 'react';
import './Individual-Sec-2.css';
import SoftwareTool from './SoftwareTool';
import TimeCard from './TimeCard';
import TopTitleComp from '../Common-HOME/TopTitleProps';
import lrLogo from '../Assets/Lightroom.png';
import psLogo from '../Assets/Photoshop.png';
import aiLogo from '../Assets/Illustrator.png';

const IndividualSec2 = () => {
  return (
    <div className="sec2-wrapper">
   <TopTitleComp title='MORE' titlespan='INFO'/>

      <div className="sec2-main-content">
        <div className="content-left">
          <h3 className="section-label">Used Tools:</h3>
          <div className="tools-container">
            <SoftwareTool logo={lrLogo} name="Adobe Lightroom" />
            <SoftwareTool logo={psLogo} name="Adobe Photoshop" />
            <SoftwareTool logo={aiLogo} name="Adobe illustrator" />
          </div>
        </div>

        <div className="content-right">
          <div className="right-top-vertical">
            <div className="time-spent-header">
               <span className="header-text">TIME SPENT</span>
            </div>
            
            <div className="time-cards-row">
              <TimeCard value="01" label="Weeks" />
              <TimeCard value="6" label="Days" />
              <TimeCard value="12" label="Hours" />
            </div>
          </div>

          <div className="case-study-btn">
            <span className="btn-text">CHECK CASE STUDY</span>
            <span className="link-icon">🔗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualSec2;