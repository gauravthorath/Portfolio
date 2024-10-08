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
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate, Outlet } from "@tanstack/react-router";
import { useThemeContext } from "../../context/ThemeContext";
import GauravImage from "../../assets/gaurav_avatar.webp";
import { useAuth } from "../../context/AuthContext";

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isDarkTheme, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
    navigate({ to: "/Portfolio/login" });
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
        {/* <ListItem button component={Link} to="/Portfolio/references">
          <ListItemText primary="References" />
        </ListItem> */}
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isDarkTheme ? "#111111" : "#0177B5",
          width: "100%",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            padding: "0 !important",
            width: "100%",
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1,
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
                aria-label="Open menu" // Accessible name added here
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Left side: Name */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant={isMedium ? "h6" : "h5"}
                sx={{
                  ml: 0,
                  fontSize: isMedium ? "1.25rem" : "1.75rem",
                  fontWeight: 700,
                }}
              >
                {isSmall ? "Gaurav" : "Gaurav Thorat"}
              </Typography>
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
                {/* <Button
                  color="inherit"
                  component={Link}
                  to="/Portfolio/references"
                >
                  References
                </Button> */}
              </div>
            )}

            {/* Right side: Icons and Profile Avatar */}
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* LinkedIn Icon */}
              <Tooltip title="LinkedIn">
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://www.linkedin.com/in/gauravthorath/"
                  target="_blank"
                  aria-label="LinkedIn" // Accessible name added here
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
                  aria-label="GitHub" // Accessible name added here
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>

              {/* Light/Dark Mode Switch */}
              <IconButton
                color="inherit"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              {/* Profile Avatar */}
              <IconButton
                color="inherit"
                onClick={handleAvatarClick}
                aria-label="Open profile menu"
              >
                <Avatar alt="Gaurav Thorat" src={GauravImage} />
              </IconButton>

              {/* Menu for the Avatar */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {!isAuthenticated && (
                  <MenuItem onClick={handleMenuItemClick}>Admin Login</MenuItem>
                )}
                {isAuthenticated && (
                  <MenuItem onClick={handleMenuItemClick}> Logout</MenuItem>
                )}
              </Menu>
            </div>
          </Toolbar>
        </Container>

        {/* Drawer for mobile menu */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawer}
        </Drawer>
      </AppBar>
      {/* Here is where the nested routes will render */}
      <Outlet />
    </>
  );
};

export default NavBar;
