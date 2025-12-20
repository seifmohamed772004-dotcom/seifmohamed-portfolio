import React from 'react';
import './Contact-Sec1.css';
import SocialLink from './SocialLink';

import phoneIcon from '../Assets/phone.png';
import beIcon from '../Assets/BehanceNavIcon.svg';
import instaIcon from '../Assets/InstagramNavIcon.svg';
import mailIcon from '../Assets/MailNavIcon.svg';
import profileImg from '../Assets/profileimg.jpg';

const ContactSec1 = () => {
  return (
    <div className="contact-main-container">
      <h1 className="contact-title">REACH OUT TO ME</h1>

      <div className="contact-card">
        <div className="contact-info-side">
          <div className="info-group">
            <span className="info-label">Name</span>
            <h2 className="info-value-name">SEIF MOHAMED</h2>
          </div>

          <div className="details-list">
            <div className="detail-item">
              <span className="detail-key">Full Name:</span>
              <span className="detail-value">Seif Mohamed</span>
            </div>
            <div className="detail-item">
              <span className="detail-key">Email:</span>
              <span className="detail-value">seifmohamed@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-key">Mobile:</span>
              <span className="detail-value">(20) 1129619164</span>
            </div>
            <div className="detail-item">
              <span className="detail-key">Location:</span>
              <span className="detail-value">Egypt</span>
            </div>
          </div>

          <div className="social-section">
            <span className="social-header">Social Media:</span>
            <div className="social-links-row">
              <SocialLink icon={phoneIcon} url="tel:+201129619164" />
              <SocialLink icon={beIcon} label="Bē" url="#" />
              <SocialLink icon={instaIcon} url="#" />
              <SocialLink icon={mailIcon} url="mailto:seifmohamed@gmail.com" />
            </div>
          </div>
        </div>

        <div className="profile-image-side">
          <div className="image-circle-wrapper">
            <img src={profileImg} alt="Seif Mohamed" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec1;