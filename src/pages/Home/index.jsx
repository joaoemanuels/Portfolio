import AboutSection from "../../components/sections/AboutSection";
import HeroSection from "../../components/sections/HeroSection";
import ProjectSection from "../../components/sections/ProjectSection";
import SkillSection from "../../components/sections/SkillSection";

import "../Home/home.styles.css";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </>
  );
}

export default Home;
