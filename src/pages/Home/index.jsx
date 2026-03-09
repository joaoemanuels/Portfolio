import AboutSection from "../../components/sections/AboutSection";
import FooterSection from "../../components/sections/FooterSection";
import HeroSection from "../../components/sections/HeroSection";
import ProjectSection from "../../components/sections/ProjectSection";
import SkillSection from "../../components/sections/SkillSection";

import "../Home/home.styles.css";

function Home() {
  return (
    <div className="home">
      <HeroSection/>
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
}

export default Home;
