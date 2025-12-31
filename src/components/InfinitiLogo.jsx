import React from "react";
import LogoLoop from "./BasicComponents/LogoLoop";
import { LOGOS } from "../constant/infinitiLogo";

function InfinitiLogo() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden border-y border-gray-100">
      <div className="relative h-24">
        <LogoLoop
          logos={LOGOS}
          speed={40}
          direction="left"
          logoHeight={60}
          gap={80}
          hoverSpeed={5}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Partner logos"
        />
      </div>
    </section>
  );
}

export default InfinitiLogo;
