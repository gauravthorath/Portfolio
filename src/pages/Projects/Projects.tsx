// Import necessary modules
import React from "react";
import ProjectCard, { Project } from "../../components/ProjectCard/ProjectCard";
import styles from "../../components/ProjectCard/ProjectCard.module.css";
import projects from "./Projects.json";
const projectList: Project[] = projects;
const ProjectsComponent: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      {projectList.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsComponent;
