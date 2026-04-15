import type React from "react";
import { useState } from "react";
import { Card, CardContent, Container, Typography, TextField, Button, Box } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import { supabase } from "../../api/supabaseClient";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../../context/AuthContext";

type LoginFormState = {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
};

const Login: React.FC = () => {
  const { isDarkTheme } = useThemeContext();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });
  const [loginError, setLoginError] = useState<string>("");
  const { login } = useAuth();

  const validateForm = () => {
    let isValid = true;
    const errors = { usernameError: "", passwordError: "" };

    if (formState.username.trim() === "") {
      errors.usernameError = "Username is required.";
      isValid = false;
    }

    if (formState.password.trim() === "") {
      errors.passwordError = "Password is required.";
      isValid = false;
    } else if (formState.password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setFormState((prev) => ({ ...prev, ...errors }));
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
      usernameError: "",
      passwordError: "",
    }));
    setLoginError("");
  };

  const checkCredentials = async () => {
    const { username, password } = formState;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password);

    if (error) {
      console.error("Error fetching user:", error);
      setLoginError("An error occurred. Please try again.");
      return false;
    }

    if (!data || data.length === 0) {
      setLoginError("Invalid username or password.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const isLoginValid = await checkCredentials();
      if (isLoginValid) {
        login();
        navigate({ to: "/Portfolio/restricted-admin-panel" });
      }
    }
  };

  return (
    <Container maxWidth="xl" sx={{ minHeight: "72vh", display: "grid", placeItems: "center" }}>
      <Card
        sx={{
          width: "100%",
          maxWidth: 460,
          border: "1px solid",
          borderColor: isDarkTheme ? "rgba(148,163,184,.25)" : "rgba(99,102,241,.25)",
          background: isDarkTheme
            ? "linear-gradient(180deg, #10172a 0%, #0b1220 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #eef2ff 100%)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" align="center" sx={{ mb: 1 }}>
            Admin Access
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Secure area for portfolio management.
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              name="username"
              value={formState.username}
              onChange={handleInputChange}
              error={!!formState.usernameError}
              helperText={formState.usernameError}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type="password"
              value={formState.password}
              onChange={handleInputChange}
              error={!!formState.passwordError}
              helperText={formState.passwordError}
            />

            {loginError && (
              <Typography color="error" variant="body2" align="center">
                {loginError}
              </Typography>
            )}

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
