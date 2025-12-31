// src/components/HexaSection.jsx
import React from "react";
import HexCard from "./BasicComponents/HexCard";
import { HEXA_CARDS } from "../constant/hexaCards";

function Tools() {
  return (
    <section className="w-full py-20 px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-[380px_1fr] gap-16 items-start">
          {/* Left side - Title and description */}
          <div className="text-right pt-8">
            <h2 className="text-[52px] font-bold mb-5 leading-[1.2]">
              <span className="textColor">הכלים שלנו</span>
            </h2>
            <p className="text-[#4A4A4A] text-[15px] leading-[1.7]">
              הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ובמהירות, כלים נוספים יכנסו בהמשך
            </p>
          </div>

          {/* Right side - Hex Grid */}
          <div className="hex-grid">
            {HEXA_CARDS.map((card) => (
              <HexCard
                key={card.id}
                tag={card.tag}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
