import { useState } from "react";
import { Button, Typography } from "@mui/material";
import styles from "./ProjectCard.module.css";
import { useThemeContext } from "../../context/ThemeContext";

export interface Project {
  name: string;
  description?: string;
  scope: string;
  processesProducts: string[];
  technologies: string[];
  responsibilities: string[];
}

const ProjectCard = ({
  project,
  projectIndex,
}: {
  project: Project;
  projectIndex: number;
}) => {
  const [showMore, setShowMore] = useState(false);
  const { isDarkTheme } = useThemeContext();

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div
      className={`${styles.card} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      <Typography variant="h6" component="h2" className={styles.titleText}>
        <strong>{projectIndex + ".  " + project.name}</strong>
      </Typography>

      {showMore ? (
        <>
          {/* Show full project details */}
          <Typography variant="body1" paragraph>
            {project.description}
          </Typography>
          <Typography variant="body2">
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </Typography>
          <Typography variant="body2">
            <strong>Scope:</strong> {project.scope}
          </Typography>
          <Typography variant="body2">
            <strong>Processes/Products:</strong>{" "}
            {project.processesProducts.join(", ")}
          </Typography>
          <Typography variant="body2">
            <strong>Responsibilities:</strong>{" "}
            {project.responsibilities.join(", ")}
          </Typography>
        </>
      ) : (
        <Typography variant="body1" paragraph>
          {project.description?.substring(0, 100)}...
        </Typography> // Show short description when not expanded
      )}

      {/* MUI outlined button for "Show More"/"Show Less" */}
      <Button
        variant="text"
        color="success"
        className={styles.showMoreBtn}
        onClick={handleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ProjectCard;
