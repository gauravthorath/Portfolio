import React, { useEffect } from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon for the map marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // Example custom icon
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
  return (
    <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Feel Free to Contact Me
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
        <Box mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <MailOutlineIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">
                  Email:{" "}
                  <a href="mailto:gauravjobs25@gmail.com">
                    gauravjobs25@gmail.com
                  </a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">
                  Phone: <a href="tel:+49-15216127113">+49-15216127113</a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Map showing Hamburg */}
        <Box mt={4}>
          <Typography variant="h6" gutterBottom>
            Location: Hamburg, Germany
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
      </Paper>
    </Container>
  );
};

export default Contact;
