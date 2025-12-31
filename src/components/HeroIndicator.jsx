import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ArrowOrbitMotion from "./BasicComponents/ArrowOrbitMotion";
import MobileMenu from "./BasicComponents/MobileMenu";
import ComponentsLink from "./BasicComponents/ComponentsLink";
import arrayImage from "../assets/Logos/arrowImage.png";
import { Logo } from "../assets";
import { NAV_ITEMS } from "../constant/Navbar";

export default function HeroIndicator() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar - Fixed at top */}
      <nav className="w-full flex items-center justify-between px-10 py-5 shadow-md fixed top-0 z-50" style={{ backgroundColor: "var(--nav-bg)" }}>
        
        {/* Mobile Menu Toggle */}
          <div className="block md:hidden">
            {MobileMenuOpen ? (
              <MenuOpenIcon
                className="text-3xl cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            ) : (
              <MenuIcon
                className="text-3xl cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              />
            )}
          </div>
           {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Desktop Links */}
          <ComponentsLink data={NAV_ITEMS} />

          {/* Button */}
          <button
            className="button w-36 h-10 flex items-center justify-center mx-4"
            onClick={() => alert("Get Started Clicked!")}
          >
          התחילו עכשיו
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <MobileMenu
        open={MobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        data={NAV_ITEMS}
      />

      {/* Hero Section */}
      <section className="w-full text-white py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-right">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white/10 text-pink-400 px-4 py-2 rounded-full text-sm mb-6">
            ✨ פלטפורמת AI לתהליכים בירוקרטיים
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            פחות בירוקרטיה,
            <br />
            <span className="textColor">
              יותר כסף בכיס שלך.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל את מה שמגיע לך — פשוט, חכם
            ובמינימום מאמץ.
          </p>

          {/* CTA */}
          <button className="bg-pink-500 hover:bg-pink-600 transition px-10 py-4 rounded-xl text-white font-medium text-lg">
            התחילו עכשיו
          </button>
        </div>

        {/* RIGHT MOTION */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* <ArrowOrbitMotion /> */}
          <img src={arrayImage} alt="" />
        </div>
      </div>
    </section>
    </>
  );
}
