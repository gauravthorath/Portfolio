import React, { useState } from "react";
import ProjectCard, { Project } from "../../components/ProjectCard/ProjectCard";
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
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            projectIndex={index + 1}
            isExpanded={expandedCard === index}
            onExpand={() => handleExpand(index)}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectsComponent;
