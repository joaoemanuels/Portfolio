import { useState } from "react";
import { projects } from "@/data/projects";
import { allProjects } from "@/data/allProjects";
import HeadingSection from "../../ui/HeadingSection";
import ProjectModal from "../../ui/ProjectModal";

import "./project-section.styles.css";

function ProjectSection() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [showAll, setShowAll] = useState(false);
	const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

	function handleOpen(project) {
		setSelectedProject(project);
	}

	function handleClose() {
		setSelectedProject(null);
	}

	return (
		<section id="projects" className="project-section">
			<div className="project-container">
				<HeadingSection>Projetos</HeadingSection>

				<div className="project-highlight">
					<h3 className="highlight-title">Destaques</h3>

					<div className="project-grid">
						{projects.map((project) => (
							<div
								key={project.id}
								className="project-card-container"
								onClick={() => handleOpen(project)}
							>
								<div className="project-card">
									<img
										src={project.images[0]}
										alt={project.title}
										className="project-image"
									/>
									<div className="project-overlay">
										<h4>{project.title}</h4>

										<div className="tech-stack">
											{project.techs.map((tech, index) => (
												<img key={index} src={tech} alt="" />
											))}
										</div>
									</div>
								</div>

								<div className="project-footer">
									<p>{project.date}</p>
									<button type="button">Detalhes</button>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="project-highlight">
					<h3 className="highlight-title">Todos os projetos</h3>

					<div className="project-grid">
						{visibleProjects.map((project) => (
							<div
								key={project.id}
								className="project-card-container"
								onClick={() => handleOpen(project)}
							>
								<div className="project-card">
									<img
										src={project.images[0]}
										alt={project.title}
										className="project-image"
									/>
									<div className="project-overlay">
										<h4>{project.title}</h4>

										<div className="tech-stack">
											{project.techs.map((tech, index) => (
												<img key={index} src={tech} alt="" />
											))}
										</div>
									</div>
								</div>

								<div className="project-footer">
									<p>{project.date}</p>
									<button type="button">Detalhes</button>
								</div>
							</div>
						))}
					</div>

					<div className="show-more-container">
						<button onClick={() => setShowAll(!showAll)}>
							{showAll ? "Mostrar menos" : "Mostrar mais"}
						</button>
					</div>
				</div>
			</div>

			<ProjectModal project={selectedProject} onClose={handleClose} />
		</section>
	);
}

export default ProjectSection;
