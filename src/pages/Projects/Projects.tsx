import type React from "react";
import { useState } from "react";
import ProjectCard, { type Project } from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import projects from "./Projects.json";
import { Box, Container, Typography } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";

const projectList: Project[] = projects;

const ProjectsComponent: React.FC = () => {
  const { isDarkTheme } = useThemeContext();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <Container
      maxWidth="xl"
      className={`${isDarkTheme ? styles.dark : styles.light}`}
    >
      <Container
        maxWidth="lg"
        className={`${isDarkTheme ? styles.dark : styles.light}`}
        sx={{ p: "0 !important" }}
      >
        <Typography
          variant="h6"
          component="h1"
          gutterBottom
          align="center"
          sx={{ pt: 10 }}
        >
          Executed Projects
        </Typography>
        <Box className={styles.card_container}>

          {projectList.map((project) => (
            <ProjectCard

              key={project.name}
              project={project}



              projectIndex={projectList.indexOf(project) + 1}
              isExpanded={expandedCard === projectList.indexOf(project)}
              onExpand={() => handleExpand(projectList.indexOf(project))}
            />
          ))}
        </Box>
      </Container>
    </Container>
  );
};

export default ProjectsComponent;
