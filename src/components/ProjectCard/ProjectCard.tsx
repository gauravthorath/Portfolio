// import { useState } from "react";
// import { Button, Typography } from "@mui/material";
// import styles from "./ProjectCard.module.css";
// import { useThemeContext } from "../../context/ThemeContext";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// export interface Project {
//   name: string;
//   description?: string;
//   scope: string;
//   processesProducts: string[];
//   technologies: string[];
//   responsibilities: string[];
// }

// const ProjectCard = ({
//   project,
//   projectIndex,
// }: {
//   project: Project;
//   projectIndex: number;
// }) => {
//   const [showMore, setShowMore] = useState(false);
//   const { isDarkTheme } = useThemeContext();

//   const handleShowMore = () => {
//     setShowMore((prev) => !prev);
//   };

//   return (
//     <div
//       className={`${styles.card} ${isDarkTheme ? styles.dark : styles.light}`}
//     >
//       <Typography variant="h6" component="h2" className={styles.titleText}>
//         <strong>{projectIndex + ".  " + project.name}</strong>
//       </Typography>

//       {showMore ? (
//         <>
//           <Typography variant="body2" paragraph>
//             {project.description}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Technologies:</strong> {project.technologies.join(", ")}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Scope:</strong> {project.scope}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Processes/Products:</strong>{" "}
//             {project.processesProducts.join(", ")}
//           </Typography>
//           <Typography variant="body2">
//             <strong>Responsibilities:</strong>{" "}
//             {project.responsibilities.join(", ")}
//           </Typography>
//         </>
//       ) : (
//         <Typography variant="body2" paragraph>
//           {project.description?.substring(0, 100)}...
//         </Typography>
//       )}

//       <Button
//         variant="text"
//         color="success"
//         className={styles.showMoreBtn}
//         onClick={handleShowMore}
//         startIcon={showMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       >
//         {showMore ? "Show Less" : "Show More"}
//       </Button>
//     </div>
//   );
// };

// export default ProjectCard;

import { Button, Typography } from "@mui/material";
import styles from "./ProjectCard.module.css";
import { useThemeContext } from "../../context/ThemeContext";
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

const ProjectCard = ({
  project,
  projectIndex,
  isExpanded,
  onExpand,
}: {
  project: Project;
  projectIndex: number;
  isExpanded: boolean;
  onExpand: () => void;
}) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div
      className={`${styles.card} ${isDarkTheme ? styles.dark : styles.light} ${
        isExpanded ? styles.expanded : ""
      }`}
    >
      <Typography variant="h6" component="h2" className={styles.titleText}>
        <strong>{projectIndex + ".  " + project.name}</strong>
      </Typography>

      {isExpanded ? (
        <>
          <Typography variant="body2" paragraph>
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
        <Typography variant="body2" paragraph>
          {project.description?.substring(0, 100)}...
        </Typography>
      )}

      <Button
        variant="text"
        color="success"
        className={styles.showMoreBtn}
        onClick={onExpand}
        startIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ProjectCard;
