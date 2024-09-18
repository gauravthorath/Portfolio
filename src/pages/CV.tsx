import React, { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import myCV from "../assets/CV_Gaurav_Thorat.pdf";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

const CVPage: React.FC = () => {
  // Create an instance of the default layout plugin
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // Create an instance of the zoom plugin
  const zoomPluginInstance = zoomPlugin();
  // Use an effect to set the zoom level to 100% when the document is loaded
  useEffect(() => {
    const { zoomTo } = zoomPluginInstance;

    // Ensure that the zoom level is set to 100% once the document is loaded
    zoomTo(1); // 1 represents 100% zoom
  }, [zoomPluginInstance]);

  return (
    <div className="pdf-container p-4">
      <div className="pdf-viewer" style={{ height: "800px" }}>
        {/* Use the Worker component with the correct worker URL */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
          <Viewer
            fileUrl={myCV}
            plugins={[defaultLayoutPluginInstance, zoomPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};
export default CVPage;
