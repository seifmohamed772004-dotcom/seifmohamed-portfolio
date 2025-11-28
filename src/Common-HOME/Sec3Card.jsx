import React from 'react';
import './Sec3Card.css'

const Sec3Card = (props) => {
    return (
        <div className="sec3-card">
            <div className="sec3-card-img-container">
                <img src={props.imgSrc} alt={props.title} className="sec3-card-img" />
            </div>
            
            <div className="sec3-card-content">
                <div className="sec3-card-header">
                    <h2 className="sec3-card-title">{props.title}</h2>
                    <p className="sec3-card-subtitle">{props.subtitle}</p>
                </div>

                <div className="sec3-card-footer">
                    <div className="sec3-card-meta">
                        <span className="sec3-meta-label">{props.category}</span>
                        <span className="sec3-meta-label">{props.date}</span>
                    </div>
                    <div className="sec3-card-btn">
                        Open Project &gt;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sec3Card;