import "./project-modal.styles.css";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{project.title}</h2>

        {/* Vídeo */}
        {project.video && (
          <div className="modal-video">
            <iframe
              src={project.video}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}

        {/* Descrição */}
        {project.fullDescription && (
          <p className="modal-description" style={{ whiteSpace: "pre-line" }}>
            {project.fullDescription}
          </p>
        )}

        {/* Imagens */}
        {project.images &&
          project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Project preview"
              className="modal-image"
            />
          ))}

        {/* Botões */}
        <div className="modal-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
            >
              Ver Projeto
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn secondary"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
