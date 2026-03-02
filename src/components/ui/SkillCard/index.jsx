import "./skill-card.styles.css";

function SkillCard({ icon, name }) {
  return (
    <div className="skill-card">
      <span>{name}</span>
      <img src={icon} alt={name} />
    </div>
  );
}

export default SkillCard;
