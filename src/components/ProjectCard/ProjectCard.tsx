import { Box, Button, Card, Chip, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export interface Project {
  name: string;
  description?: string;
  scope: string;
  processesProducts: string[];
  technologies: string[];
  responsibilities: string[];
}

type ProjectCardProps = {
  project: Project;
  projectIndex: number;
  isExpanded: boolean;
  onExpand: () => void;
};

const ProjectCard = ({
  project,
  projectIndex,
  isExpanded,
  onExpand,
}: ProjectCardProps) => {
  return (
    <Card
      sx={{
        p: 2.5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
        {projectIndex}. {project.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {project.scope}
      </Typography>

      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {isExpanded
          ? project.description
          : `${project.description?.slice(0, 140) ?? ""}${project.description && project.description.length > 140 ? "..." : ""}`}
      </Typography>

      {isExpanded && (
        <Stack spacing={1.5} sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            {project.technologies.map((technology) => (
              <Chip key={technology} size="small" label={technology} />
            ))}
          </Box>
          {project.responsibilities.length > 0 && (
            <Typography variant="body2" color="text.secondary">
              <strong>Responsibilities:</strong> {project.responsibilities.join(", ")}
            </Typography>
          )}
          {project.processesProducts.length > 0 && (
            <Typography variant="body2" color="text.secondary">
              <strong>Processes:</strong> {project.processesProducts.join(", ")}
            </Typography>
          )}
        </Stack>
      )}

      <Button
        variant="text"
        color="primary"
        sx={{ mt: "auto", alignSelf: "flex-start", pt: 2 }}
        onClick={onExpand}
        startIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </Card>
  );
};

export default ProjectCard;
