
import HeroIndicator from "./components/HeroIndicator.jsx";
import UserIntro from "./components/UserIntro.jsx";
import Highlights from "./components/Highlights.jsx";
import Tools from "./components/Tools.jsx";
import FlowAnimation from "./components/FlowAnimation.jsx";
import FaqSection from "./components/FaqSection.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import InfinitiLogo from "./components/InfinitiLogo.jsx";

function App() {
  return (
    <>
      <HeroIndicator />
      <InfinitiLogo />
      <UserIntro />
      <Highlights />
      <Tools />
      <FlowAnimation />
      <FaqSection />
      <SuccessStories />
      <ContactSection />

      <Footer />
    </>
  );
}

export default App;
