import type React from "react";
import { Box, Chip, Container, Typography } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";

const Footer: React.FC = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        borderTop: "1px solid",
        borderColor: isDarkTheme
          ? "rgba(148, 163, 184, 0.2)"
          : "rgba(99, 102, 241, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Box
        sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Gaurav Thorat. Crafted with React + TypeScript.
          </Typography>
          <Chip
            label="Open to Senior Frontend Roles"
            color="primary"
            variant={isDarkTheme ? "filled" : "outlined"}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
