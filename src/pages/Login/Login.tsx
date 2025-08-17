import type React from "react";
import { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import styles from "./Login.module.css";
import { useThemeContext } from "../../context/ThemeContext";
import { supabase } from "../../api/supabaseClient";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../../context/AuthContext";

// Define an interface for form state
interface LoginFormState {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
}

//TODO: This needs to be fixed, its asking to enter credential twice before login
const Login: React.FC = () => {
  const { isDarkTheme } = useThemeContext();
  const navigate = useNavigate();
  // State for form values and validation errors
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });
  const [loginError, setLoginError] = useState<string>("");
  const { login } = useAuth();

  // Validation checks for the form
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

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
      usernameError: "",
      passwordError: "",
    }));
    setLoginError(""); // Reset login error on input change
  };

  // Check user credentials with Supabase
  const checkCredentials = async () => {
    const { username, password } = formState;

    // Query the 'user' table for the given username and password
    const { data, error } = await supabase
      .from("users") // Make sure the table name matches your Supabase schema
      .select("*")
      .eq("username", username)
      .eq("password", password); // It's recommended to hash passwords before checking in production

    if (error) {
      console.error("Error fetching user:", error);
      setLoginError("An error occurred. Please try again.");
      return false;
    }

    // If no user is found, login fails
    if (!data || data.length === 0) {
      setLoginError("Invalid username or password.");
      return false;
    }

    // If user is found, login succeeds
    // console.log("User found:", data);
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      //   console.log("Form is valid. Submitting form:", formState);
      const isLoginValid = await checkCredentials();
      if (isLoginValid) {
        // Handle successful login here, e.g., redirect or store auth tokens
        login(); //To set isAuthenticated to true in Auth Context which later used to check while shoing Admin component
        navigate({ to: "/Portfolio/restricted-admin-panel" });
      }
    }
  };

  return (
    <Container
      maxWidth="xl"
      className={`${isDarkTheme ? styles.dark : styles.light}`}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "87vh",
      }}
    >
      <Box
        sx={{
          border: 1,
          borderColor: "primary.main",
          borderRadius: 2,
          padding: 4,
          boxShadow: 3,
          minWidth: "400px",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom align="center">
          Login
        </Typography>

        <Box
          component="form"
          sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit}
        >
          {/* Username Field */}
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

          {/* Password Field */}
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

          {/* Login Error Message */}
          {loginError && (
            <Typography color="error" variant="body2" align="center">
              {loginError}
            </Typography>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
