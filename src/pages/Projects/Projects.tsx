import type React from "react";
import { useMemo, useState } from "react";
import ProjectCard, { type Project } from "../../components/ProjectCard/ProjectCard";
import projects from "./Projects.json";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";

const projectList: Project[] = projects;

const ProjectsComponent: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const { isDarkTheme } = useThemeContext();

  const handleExpand = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  const filteredProjects = useMemo(
    () =>
      projectList.filter(
        (project) =>
          project.name.toLowerCase().includes(search.toLowerCase()) ||
          project.technologies.join(" ").toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg" sx={{ p: "0 !important" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 1.5, textAlign: "center" }}
        >
          Delivered Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 3 }}
        >
          A curated portfolio of products and enterprise platforms across fintech, AI, logistics, and energy.
        </Typography>
        <TextField
          fullWidth
          label="Search by project or technology"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              backgroundColor: isDarkTheme ? "rgba(15,23,42,.4)" : "#ffffff",
            },
          }}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              projectIndex={index + 1}
              isExpanded={expandedCard === index}
              onExpand={() => handleExpand(index)}
            />
          ))}
        </Box>

      </Container>
    </Container>
  );
};

export default ProjectsComponent;
