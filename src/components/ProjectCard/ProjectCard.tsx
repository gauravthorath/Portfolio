import { useState } from "react";
import styles from "./ProjectCard.module.css";

export interface Project {
  name: string;
  description?: string;
  scope: string;
  processesProducts: string[];
  technologies: string[];
  responsibilities: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.card}>
      <h2>{project.name}</h2>
      {showMore ? (
        <>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </p>
          <p>
            <strong>Scope:</strong> {project.scope}
          </p>
          <p>
            <strong>Processes/Products:</strong>{" "}
            {project.processesProducts.join(", ")}
          </p>
          <p>
            <strong>Responsibilities:</strong>{" "}
            {project.responsibilities.join(", ")}
          </p>
        </>
      ) : (
        <p>{project.description?.substring(0, 100)}...</p> // Display a short description
      )}
      <button className={styles.showMoreBtn} onClick={handleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ProjectCard;
