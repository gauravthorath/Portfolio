import type React from "react";
import { useEffect, useState } from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { supabase } from "./api/supabaseClient";
import Snowflakes from "./components/Snowflakes/Snowflakes";
import Raindrops from "./components/Raindrops/Raindrops";

const App: React.FC = () => {
  const [weatherConditions, setWeatherConditions] = useState<{
    snow: boolean;
    rainy: boolean;
  }>({ snow: false, rainy: false });

  // Fetch weather settings from Supabase on mount
  useEffect(() => {
    const fetchWeatherSettings = async () => {
      const { data, error } = await supabase
        .from("global_settings")
        .select("currentWeather")
        .single();

      if (error) {
        console.error("Error fetching weather settings: ", error);
      } else if (data) {
        const currentWeather = data.currentWeather;

        try {
          const parsedWeather = JSON.parse(currentWeather);
          setWeatherConditions(parsedWeather);
        } catch (err) {
          console.error("Error parsing currentWeather:", err);
        }
      }
    };

    fetchWeatherSettings();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {weatherConditions.snow && <Snowflakes />}
      {weatherConditions.rainy && <Raindrops />}
      <AuthProvider>
        <Box component="main" sx={{ flex: 1 }}>
          <RouterProvider router={router} />
        </Box>
        <Footer />
      </AuthProvider>
    </Box>
  );
};

export default App;
