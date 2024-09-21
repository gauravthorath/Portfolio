import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Link, Outlet } from "@tanstack/react-router";
import GauravImage from "../../assets/gaurav_avatar.png";

const NavBar: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <div role="presentation" onClick={closeDrawer}>
      <List>
        <ListItem button component={Link} to="/Portfolio/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/Portfolio/projects">
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/Portfolio/contact">
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/Portfolio/cv">
          <ListItemText primary="CV" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: isDarkTheme ? "#333" : "#0177B5",
          width: "100%", // Make sure the AppBar takes the full width
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            padding: "0 !important",
            width: "100%", // Ensure the container spans full width
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1, // Make Toolbar take full space
              width: "100%",
            }}
          >
            {/* Mobile Menu Button */}
            {isMedium && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Left side: Name and Info Icon */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant={isMedium ? "h6" : "h5"} // Responsive variant
                sx={{
                  ml: 0,
                  fontSize: isMedium ? "1.25rem" : "1.75rem", // Mobile font size adjustments
                  fontWeight: 700,
                }}
              >
                {isSmall ? "Gaurav" : "Gaurav Thorat"}
              </Typography>

              {/* Tooltip with Info Icon */}
              <Tooltip
                title={
                  <React.Fragment>
                    <div>
                      <strong>Under Development:</strong>
                    </div>
                    <div>
                      Some features and sections of this portfolio are still in
                      progress.
                    </div>
                    <div>
                      Check back later for more updates and completed sections.
                    </div>
                  </React.Fragment>
                }
                placement="bottom"
              >
                <IconButton color="inherit" sx={{ ml: 1 }}>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </div>

            {/* Center: Navigation Links (for desktop) */}
            {!isMedium && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button color="inherit" component={Link} to="/Portfolio/about">
                  About
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/Portfolio/projects"
                >
                  Projects
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/Portfolio/contact"
                >
                  Contact
                </Button>
                <Button color="inherit" component={Link} to="/Portfolio/cv">
                  CV
                </Button>
              </div>
            )}

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

      {/* Drawer for mobile menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>

      {/* Here is where the nested routes will render */}
      <Container
        maxWidth={false}
        sx={{
          padding: "0 !important",
          width: "100%", // Ensure full width for content
        }}
      >
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default NavBar;
