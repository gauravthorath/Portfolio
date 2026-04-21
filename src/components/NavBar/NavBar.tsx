import type React from "react";
import { useMemo, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useThemeContext } from "../../context/ThemeContext";
import GauravImage from "../../assets/gaurav_avatar.webp";
import { useAuth } from "../../context/AuthContext";

const links = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isDarkTheme, toggleTheme } = useThemeContext();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const appBarBg = useMemo(
    () =>
      isDarkTheme
        ? "rgba(7, 11, 24, 0.72)"
        : "rgba(255, 255, 255, 0.72)",
    [isDarkTheme]
  );

  const handleAdminAction = () => {
    if (isAuthenticated) {
      logout();
      navigate({ to: "/about" });
    } else {
      navigate({ to: "/login" });
    }
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: "blur(14px)",
          backgroundColor: appBarBg,
          borderBottom: "1px solid",
          borderColor: isDarkTheme
            ? "rgba(148, 163, 184, 0.2)"
            : "rgba(59, 130, 246, 0.2)",
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 74 }}>
            <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
              {isMobile && (
                <IconButton
                  sx={{ mr: 1.5 }}
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open navigation menu"
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography
                component={Link}
                to="/about"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                }}
              >
                Gaurav Thorat
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {links.map((link) => (
                  <Button
                    key={link.to}
                    component={Link}
                    to={link.to}
                    sx={{
                      color: "text.primary",
                      fontWeight: 600,
                      px: 2,
                      borderRadius: 999,
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 2 }}>
              <Tooltip title="LinkedIn">
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/gauravthorath/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton
                  component="a"
                  href="https://github.com/gauravthorath"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Toggle theme">
                <IconButton onClick={toggleTheme} aria-label="Toggle theme">
                  {isDarkTheme ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Tooltip>
              <IconButton
                aria-label="Open account menu"
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <Avatar alt="Gaurav Thorat" src={GauravImage} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: isDarkTheme ? "#0b1220" : "#ffffff",
          },
        }}
      >
        <List sx={{ pt: 3 }}>
          {links.map((link) => (
            <ListItemButton
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleAdminAction}>
          {isAuthenticated ? "Logout" : "Admin Login"}
        </MenuItem>
      </Menu>

      <Box sx={{ px: { xs: 1.5, md: 3 }, pb: 4 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default NavBar;
