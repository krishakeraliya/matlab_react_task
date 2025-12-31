// src/components/BasicComponents/HexCard.jsx
import React from "react";

function HexCard({ tag, title, desc }) {
  return (
    <div className="hex-card" dir="rtl">
      {/* Tag */}
      <span className="hex-tag">{tag}</span>

      {/* Content */}
      <h3 className="hex-title">{title}</h3>
      <p className="hex-desc">{desc}</p>

      {/* CTA */}
      <button className="hex-btn">
        <span>←</span>
        התחילו עכשיו
      </button>
    </div>
  );
}

export default HexCard;
