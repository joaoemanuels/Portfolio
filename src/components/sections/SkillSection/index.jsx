import HeadingSection from "../../ui/HeadingSection";

import html from "@/assets/icons/html5.svg";
import css from "@/assets/icons/css3.svg";
import js from "@/assets/icons/js.svg";
import react from "@/assets/icons/react.svg";
import sass from "@/assets/icons/scss.svg";
import figma from "@/assets/icons/figma.svg";
import vite from "@/assets/icons/vite.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import vercel from "@/assets/icons/vercel.svg";
import SkillCard from "../../ui/SkillCard";

import "./skill-section.styles.css";

function SkillSection() {
  return (
    <section id="skills" className="skill-section">
      <HeadingSection>Tecnologias</HeadingSection>
      <div className="skill-section-container">
        <div className="skill-cards">
          <SkillCard icon={html} name="React" />

          <SkillCard icon={css} name="Sass" />

          <SkillCard icon={js} name="Figma" />

          <SkillCard icon={react} name="Figma" />

          <SkillCard icon={sass} name="Figma" />

          <SkillCard icon={figma} name="Figma" />

          <SkillCard icon={vite} name="vite" />

          <SkillCard icon={tailwind} name="tailwind" />

          <SkillCard icon={vercel} name="vercel" />
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
