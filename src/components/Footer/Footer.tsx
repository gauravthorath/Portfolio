import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import CountUp from "react-countup";
import styles from "./Footer.module.css"; // Custom CSS for the meter effect

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    // Simulate a fetch for visitor count. Replace with actual API logic.
    setTimeout(() => {
      setVisitorCount(12345); // Example visitor count
    }, 1000);
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
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Typography variant="body2" color="textSecondary" sx={{ px: 2 }}>
            © {new Date().getFullYear()} Gaurav Thorat. All rights reserved.
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
