import React, { useEffect, useState } from "react";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import { supabase } from "./api/supabaseClient"; // Import your Supabase client
import Snowflakes from "./components/Snowflakes/Snowflakes"; // Uncomment to use
import Raindrops from "./components/Raindrops/Raindrops"; // Uncomment to use

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
        .single(); // Fetch single record

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
      sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}
    >
      {/* Conditionally render components based on weather conditions */}
      {weatherConditions.snow && <Snowflakes />}
      {weatherConditions.rainy && <Raindrops />}
      <AuthProvider>
        <RouterProvider router={router} />
        <Footer />
      </AuthProvider>
    </Box>
  );
};

export default App;
