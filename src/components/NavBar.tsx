import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useRouter } from "@tanstack/react-router"; // Correct hook

const NavBar: React.FC = () => {
  const router = useRouter(); // Get the router object

  // Navigation functions
  const goToAbout = () => {
    router.navigate({ to: "/about" });
  };

  const goToProjects = () => {
    router.navigate({ to: "/projects" });
  };

  const goToContact = () => {
    router.navigate({ to: "/contact" });
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0d47a1" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Gaurav Thorat
          </Typography>
        </div>
        <div>
          <Button color="inherit" onClick={goToAbout}>
            About
          </Button>
          <Button color="inherit" onClick={goToProjects}>
            Projects
          </Button>
          <Button color="inherit" onClick={goToContact}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
