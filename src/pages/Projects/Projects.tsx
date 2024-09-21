// Import necessary modules
import React from "react";
import ProjectCard, { Project } from "../../components/ProjectCard/ProjectCard";
import styles from "../../components/ProjectCard/ProjectCard.module.css";
import projects from "./Projects.json";
import { Box, Container, Typography } from "@mui/material";
const projectList: Project[] = projects;
const ProjectsComponent: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Executed Projects
      </Typography>
      <Box className={styles.card_container}>
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Container>
  );
};

export default ProjectsComponent;
