import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import styles from "./Login.module.css";
import { useThemeContext } from "../../context/ThemeContext";

// Define an interface for form state
interface LoginFormState {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
}

const Login: React.FC = () => {
  const { isDarkTheme } = useThemeContext();

  // State for form values and validation errors
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });

  // Validation checks for the form
  const validateForm = () => {
    let isValid = true;
    const errors = { usernameError: "", passwordError: "" };

    if (formState.username.trim() === "") {
      errors.usernameError = "Username is required";
      isValid = false;
    }

    if (formState.password.trim() === "") {
      errors.passwordError = "Password is required";
      isValid = false;
    } else if (formState.password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters long";
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
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      //   console.log("Form is valid. Submitting form:", formState);
      // Handle login logic here, e.g., API call
    }
  };

  return (
    <Container
      maxWidth="sm"
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
          minWidth: "500px",
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
