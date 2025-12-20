import React, { useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item-container ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question-row">
        <span className="faq-question-text">{question}</span>
        <div className={`faq-icon ${isOpen ? 'rotate' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="#FFF0ED" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      
      {isOpen && (
        <div className="faq-answer-row">
          <p className="faq-answer-text">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;