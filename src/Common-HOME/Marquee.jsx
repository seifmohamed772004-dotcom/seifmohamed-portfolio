// StaticPropsMarquee.jsx
import React from "react";
import "./Marquee.css";

const marqueeItems = [
  "3DD MODELLING",
  "UX DESIGNERR",
  "GRAPHIC DDES.",
  "FRONT-END DEVELLOPER",
  "VIDDEO EDITING",
  "MOTION GGRAPHICS",
  "PHOTOGRRAPHY",
  "AR DESIGNERR",
];

export default function StaticPropsMarquee() {
  return (
    <section className="marquee" aria-label="Scrolling updates">
      <section className="marquee-track">
        {marqueeItems.map((text, index) => (
          <article className="marquee-item" key={index}>
            <h1>{text}</h1>
          </article>
        ))}
        {/* Duplicate for seamless loop */}
        {marqueeItems.map((text, index) => (
          <article className="marquee-item" key={index + marqueeItems.length}>
            <h1>{text}</h1>
          </article>
        ))}
      </section>
    </section>
  );
}