import React, { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import myCV from "../../assets/CV_Gaurav_Thorat.pdf";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "./CV.module.css";

const CVPage: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDarkTheme } = useThemeContext();
  // Create an instance of the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // Create an instance of the zoom plugin
  const zoomPluginInstance = zoomPlugin();
  // Use an effect to set the zoom level to 100% when the document is loaded
  useEffect(() => {
    const { zoomTo } = zoomPluginInstance;

    // Ensure that the zoom level is set to 100% once the document is loaded
    zoomTo(isSmall ? 0.6 : 1); // 1 represents 100% zoom
  }, [isSmall, zoomPluginInstance]);

  return (
    <Container
      maxWidth="xl"
      className={`${isDarkTheme ? styles.dark : styles.light}`}
    >
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        align="center"
        sx={{ pt: 10 }}
      >
        My detailed professional journey is outlined in the CV below.
      </Typography>
      <div className="pdf-viewer" style={{ height: "800px" }}>
        {/* Use the Worker component with the correct worker URL */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
          <Viewer
            fileUrl={myCV}
            plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
          />
        </Worker>
      </div>
    </Container>
  );
};
export default CVPage;
