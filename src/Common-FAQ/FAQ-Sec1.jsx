import React from 'react';
import './FAQ-Sec1.css';
import FAQItem from './FAQItem';

const FAQSec1 = () => {
  const faqData = [
    {
      q: "What design services do you specialize in?",
      a: "I work across UX/UI, branding, graphic design, motion, 3D, and digital experiences."
    },
    {
      q: "How do you approach a new project?",
      a: "I research, define the problem, design with purpose, then refine through iteration."
    },
    {
      q: "Do you work across different industries?",
      a: "Yes, I adapt my process to fit different industries and project goals."
    },
    {
      q: "Can you collaborate with other teams?",
      a: "Absolutely. I work smoothly with developers, marketers, and creative teams."
    },
    {
      q: "How can we start a project together?",
      a: "Reach out through the contact section and we’ll take it from there."
    }
  ];

  return (
    <div className="faq-main-section">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about working together</p>
      </div>

      <div className="faq-list-container">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
};

export default FAQSec1;