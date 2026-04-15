import type React from "react";
import { useEffect, useState } from "react";
import { Container, Typography, Box, TextField, Button, Stack, Card, CardContent } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LinkedIn, GitHub, EmailOutlined, PlaceOutlined } from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
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
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors = {
      name: formData.name.length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/i.test(formData.email),
      message: formData.message.length < 10,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      const form = event.target as HTMLFormElement;
      form.submit();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev: ContactDetails) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" sx={{ textAlign: "center", mb: 1 }}>
          Let’s build something remarkable
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center", mb: 4 }}>
          Reach out for product consulting, frontend architecture, or engineering leadership roles.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            gap: 2,
          }}
        >
          <Card sx={{ backgroundColor: "background.paper" }}>
            <CardContent>
              <Box
                component="form"
                action="https://formspree.io/f/manqraep"
                method="POST"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
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
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  error={errors.message}
                  helperText={errors.message ? "Message must be at least 10 characters" : ""}
                  required
                />
                <Button type="submit" variant="contained" size="large">
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Stack spacing={2}>
            <Card>
              <CardContent>
                <Stack spacing={1.5}>
                  <Typography variant="h6">Direct channels</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <EmailOutlined color="primary" />
                    <Typography variant="body2">gauravjobs25@gmail.com</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PlaceOutlined color="primary" />
                    <Typography variant="body2">Hamburg, Germany</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button
                      startIcon={<LinkedIn />}
                      variant="outlined"
                      component="a"
                      href="https://www.linkedin.com/in/gauravthorath/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      startIcon={<GitHub />}
                      variant="outlined"
                      component="a"
                      href="https://github.com/gauravthorath"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: isDarkTheme ? "rgba(148,163,184,.2)" : "rgba(99,102,241,.2)",
              }}
            >
              <Box sx={{ height: 320 }}>
                <MapContainer center={[53.5653, 9.9802]} zoom={13} style={{ height: "100%", width: "100%" }}>
                  <ResizeMap />
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[53.5653, 9.9802]} icon={customIcon}>
                    <Popup>Hamburg, Germany</Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Container>
  );
};

export default Contact;
