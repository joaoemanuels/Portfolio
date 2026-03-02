import "./project-section.styles.css";

function ProjectSection() {
  return (
    <section className="project-section">
      <div className="project-container">
        <h2 className="project-title">Projetos</h2>

        <div className="project-highlight">
          <h3 className="highlight-title">Destaques</h3>

          <div className="project-grid">
            {/* Card 1 */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <h4>Collage.fm</h4>
                  <div className="tech-stack">
                    <span>React</span>
                    <span>TS</span>
                    <span>Node</span>
                    <span>Figma</span>
                  </div>
                </div>
              </div>

              <div className="project-extra">
                <span>13 de Março de 2025</span>
                <button>Ver mais</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="project-card">
              <div className="project-overlay">
                <h4>The Movie Guide</h4>
                <div className="tech-stack">
                  <span>React</span>
                  <span>TS</span>
                  <span>Node</span>
                  <span>Figma</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="project-card">
              <div className="project-overlay">
                <h4>Daily Weather</h4>
                <div className="tech-stack">
                  <span>HTML</span>
                  <span>Sass</span>
                  <span>JS</span>
                  <span>API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
