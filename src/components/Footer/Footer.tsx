import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CountUp from "react-countup";
import styles from "./Footer.module.css"; // Custom CSS for the meter effect
import { supabase } from "../../api/supabaseClient";

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const { data, error } = await supabase
        .from("visitors")
        .select("ip_address", { count: "exact" });
      if (error) {
        console.error(error);
      } else {
        setVisitorCount(data?.length || 0);
      }
    };

    fetchVisitorCount();
  }, []);

  // Function to split the visitor count into individual digits
  const formatVisitorCount = (count: number) => {
    return count.toString().padStart(6, "0").split(""); // Ensure 6 digits
  };

  return (
    <footer>
      <Container
        sx={{
          px: "0 !important",
          borderTop: "1px solid #99c6de !important",
          maxWidth: "100% !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmall ? "column" : "row", // Vertically aligned for small screens
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Typography variant="body2" color="textSecondary" sx={{ px: 2 }}>
            © {new Date().getFullYear()} Gaurav Thorat. All rights reserved
          </Typography>

          {/* Electricity Meter Style Visitor Count */}
          <Typography variant="body2" color="textSecondary" sx={{ px: 2 }}>
            <div className={styles.meter_wrapper}>
              <div className={styles.meter_digits}>
                {formatVisitorCount(visitorCount).map((digit, index) => (
                  <div key={index} className={styles.meter_box}>
                    <CountUp
                      start={0}
                      end={parseInt(digit)}
                      duration={0.5}
                      useEasing={false}
                      preserveValue
                    />
                  </div>
                ))}
              </div>
            </div>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;