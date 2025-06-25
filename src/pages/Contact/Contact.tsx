import type React from "react";
import { useEffect, useState } from "react";
import { Container, Typography, Box, Grid, IconButton, TextField, Button } from "@mui/material";
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

type ContactDetails = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { isDarkTheme } = useThemeContext();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validation
    const newErrors = {
      name: formData.name.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/i.test(formData.email),
      message: formData.message.length < 10
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      // Form is valid, submit to Formspree
      const form = event.target as HTMLFormElement;
      form.submit();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev: ContactDetails) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container
      maxWidth="xl"
      className={`${isDarkTheme ? styles.dark : styles.light}`}
    >
      <Container
        maxWidth="lg"
        className={`${isDarkTheme ? styles.dark : styles.light}`}
      >
        <Typography
          variant="h6"
          component="h1"
          gutterBottom
          align="center"
          sx={{ pt: 10 }}
        >
          Connect with Me
        </Typography>

        <Box sx={{ mt: 6, mb: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Contact Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Feel free to reach out for collaborations, inquiries, or for a detailed Curriculum Vitae.
          </Typography>

          <Box
            component="form"
            action="https://formspree.io/f/manqraep"
            method="POST"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <TextField
              fullWidth
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
              helperText={errors.name ? "Name must be at least 2 characters" : ""}
              required
            />

            <TextField
              fullWidth
              name="email"
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              helperText={errors.email ? "Enter a valid email address" : ""}
              required
            />

            <TextField
              fullWidth
              name="message"
              label="Your Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              error={errors.message}
              helperText={errors.message ? "Message must be at least 10 characters" : ""}
              required
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                backgroundColor: isDarkTheme ? '#0177B5' : '#0147B5',
                '&:hover': {
                  backgroundColor: isDarkTheme ? '#0177B5' : '#0157B5',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
        <Box sx={{ padding: 3, borderRadius: 2 }}>


          {/* Map showing Hamburg */}
          <Box mt={2}>
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
          <Box mb={2}>
            <Grid container spacing={2}>
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
                    title="View GitHub Profile"
                    size="small"
                  >
                    Github Profile
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>{" "}
    </Container>
  );
};

export default Contact;
