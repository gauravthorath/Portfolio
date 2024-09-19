import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Tooltip,
} from "@mui/material";
import {
  // Menu as MenuIcon,
  Brightness4,
  Brightness7,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Link, Outlet } from "@tanstack/react-router";
import GauravImage from "../../assets/gaurav_avatar.png";

const NavBar: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: isDarkTheme ? "#333" : "#0177B5" }}
      >
        <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left side: Menu Icon and Name */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h5" sx={{ ml: 0 }}>
                Gaurav Thorat
              </Typography>
            </div>

            {/* Center: Navigation Links */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit" component={Link} to="/Portfolio/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/Portfolio/projects">
                Projects
              </Button>
              <Button color="inherit" component={Link} to="/Portfolio/contact">
                Contact
              </Button>
              <Button color="inherit" component={Link} to="/Portfolio/cv">
                CV
              </Button>
            </div>

            {/* Right side: LinkedIn, GitHub, Theme Toggle, and Profile Avatar */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* LinkedIn Icon */}
              <Tooltip title="LinkedIn">
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://www.linkedin.com/in/gauravthorath/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>

              {/* GitHub Icon */}
              <Tooltip title="GitHub">
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://github.com/gauravthorath"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>

              {/* Light/Dark Mode Switch */}
              <IconButton color="inherit" onClick={toggleTheme}>
                {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              {/* Profile Avatar */}
              <IconButton color="inherit">
                <Avatar alt="Gaurav Thorat" src={GauravImage} />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Here is where the nested routes will render */}
      <Container maxWidth="xl" sx={{ padding: "0 !important" }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default NavBar;
