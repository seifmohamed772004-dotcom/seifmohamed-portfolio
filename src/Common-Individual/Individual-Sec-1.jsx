import React from 'react';
import './Individual-Sec-1.css';
import IconButton from './IconButton';
import ProjectImage from './ProjectImage';
import WBP from '../Common-HOME/WhiteButtonProp.jsx';
import shareIcon from '../Assets/ShareIcon.png';
import heartIcon from '../Assets/HeartIcon.png';
import ferrariImg from '../Assets/Graphic Design IMG 1.png';

const IndividualSec1 = () => {
  return (
    <div className="sec1-container">
      <div className="left-section">
        
     <section className='Sec1LowerRight'>
<div className='Sec1LowerRightDot'></div>

<h1 className='OFW'>Open For Work</h1>
</section>

        <div className="text-header-group">
          <h1 className="project-title">Ferrari F40 Poster</h1>
          <h2 className="project-subtitle">Graphic Design</h2>
        </div>

        <p className="project-description">
          Basically I chose this mockup because the design itself looks clean
          and simple and was actually used as a room decoration so i
          thought this scene around the mockup itself is suitable for the
          design's simplicity and actual usage.
        </p>

        <div className="action-buttons-row">
      <WBP Btntitle='Create Together!' />
          
          <IconButton icon={shareIcon} altText="Share" />
          <IconButton icon={heartIcon} altText="Like" />
        </div>
      </div>

      <div className="right-section">
        <ProjectImage imageSrc={ferrariImg} altText="Ferrari F40 Poster Mockup" />
      </div>
    </div>
  );
};

export default IndividualSec1;