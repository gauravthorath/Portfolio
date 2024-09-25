import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "./Contact.module.css";
// Custom icon for the map marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // custom icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Function to handle map resizing issues
const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize(); // Trigger a resize when the map becomes visible
  }, [map]);
  return null;
};

const Contact: React.FC = () => {
  const { isDarkTheme } = useThemeContext();

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
        sx={{ pt: "20px" }}
      >
        Contact Me
      </Typography>
      <Box sx={{ padding: 3, borderRadius: 2 }}>
        <Box mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <MailOutlineIcon color="primary" sx={{ marginRight: 1 }} />
                <IconButton
                  component="a"
                  href="mailto:gauravjobs25@gmail.com"
                  target="_blank"
                  aria-label="LinkedIn"
                  title="View Linked Profile"
                  size="small"
                >
                  gauravjobs25@gmail.com
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="primary" sx={{ marginRight: 1 }} />
                <IconButton
                  component="a"
                  href="tel:+49-15216127113"
                  target="_blank"
                  aria-label="LinkedIn"
                  title="View Linked Profile"
                  size="small"
                >
                  +49-15216127113
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <LinkedIn color="primary" sx={{ marginRight: 1 }} />
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/gauravthorath/"
                  target="_blank"
                  aria-label="LinkedIn"
                  title="View Linked Profile"
                  size="small"
                >
                  LinkedIn Profile
                </IconButton>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box display="flex" alignItems="center">
                <GitHub color="primary" sx={{ marginRight: 1 }} />
                <IconButton
                  component="a"
                  href="https://github.com/gauravthorath"
                  target="_blank"
                  aria-label="GitHub"
                  title="View Linked Profile"
                  size="small"
                >
                  Github Profile
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Map showing Hamburg */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Current Location: Hamburg, Germany
          </Typography>
          <div style={{ height: "400px", width: "100%" }}>
            <MapContainer
              center={[53.5653, 9.9802]} // Coordinates for Hamburg
              zoom={13}
              style={{ height: "100%", width: "100%" }} // Ensure full size for the map container
            >
              {/* Resize Map component to handle re-rendering issues */}
              <ResizeMap />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[53.5653, 9.9802]} icon={customIcon}>
                <Popup>Hamburg, Germany</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
