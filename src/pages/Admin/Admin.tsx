import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Button,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import styles from "./Admin.module.css";
import { supabase } from "../../api/supabaseClient";

const Admin: React.FC = () => {
  const isDarkTheme = useThemeContext();

  // State to manage checkbox values
  const [isSnowFall, setIsSnowFall] = useState(false);
  const [isRainy, setIsRainy] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [recordId, setRecordId] = useState<number | null>(null); // Track the record ID
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  // Fetch existing settings when the component mounts
  useEffect(() => {
    const fetchSettings = async () => {
      const { data, error } = await supabase
        .from("global_settings")
        .select("*")
        .single(); // Fetch single record

      if (error) {
        console.error("Error fetching settings: ", error);
      } else if (data) {
        setIsSnowFall(data.currentWeather.snow);
        setIsRainy(data.currentWeather.rainy);
        console.log("🚀 ~ fetchSettings ~ data.id:", data.id);
        setRecordId(data.id); // Set the record ID
      } else {
        // If no record found, we can create a default one here (optional)
        // You can comment this out if you prefer handling creation only on save
        await createDefaultSettings();
      }
    };

    fetchSettings();
  }, []);

  // Function to create default settings
  const createDefaultSettings = async () => {
    const defaultWeather = {
      snow: false,
      rainy: false,
    };

    const { error } = await supabase
      .from("global_settings")
      .insert([{ currentWeather: defaultWeather }]);

    if (error) {
      console.error("Error creating default settings: ", error);
    } else {
      setSnackbarMessage("Default weather settings created successfully!");
      setSnackbarOpen(true);
    }
  };

  // Handlers for checkbox changes
  const handleSnowFallChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSnowFall(event.target.checked);
  };

  const handleRainyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRainy(event.target.checked);
  };

  // Save function to update or create Supabase record
  const handleSave = async () => {
    const currentWeather = {
      snow: isSnowFall,
      rainy: isRainy,
    };

    if (recordId) {
      // If record ID exists, update it
      const { error: updateError } = await supabase
        .from("global_settings")
        .update({ currentWeather })
        .eq("id", recordId); // Use the record ID for updating

      if (updateError) {
        setSnackbarMessage("Error updating data: " + updateError.message);
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage("Weather settings updated successfully!");
        setSnackbarOpen(true);
      }
    } else {
      // If no record exists, create one
      await createDefaultSettings();
    }
  };

  // Snackbar close handler
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const minHeight = isSmall ? "90vh" : "87vh";
  return (
    <Container
      maxWidth="xl"
      className={`${isDarkTheme ? styles.dark : styles.light}`}
      sx={{
        p: "100px !important",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: { minHeight },
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        gutterBottom
        align="center"
        sx={{ pt: 10 }}
      >
        Admin Panel
      </Typography>

      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          width: "400px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Weather Conditions
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSnowFall}
                onChange={handleSnowFallChange}
                color="primary"
              />
            }
            label="SnowFall"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isRainy}
                onChange={handleRainyChange}
                color="primary"
              />
            }
            label="Rainy Weather"
          />
        </FormGroup>
        {/* Save Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{ marginTop: 2 }}
        >
          Save
        </Button>
      </Paper>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default Admin;
