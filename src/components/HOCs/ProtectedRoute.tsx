import React from "react";
import { useNavigate } from "@tanstack/react-router"; // Import useNavigate hook
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
}) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate(); // Initialize navigate function

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    navigate({ to: "/Portfolio/login" }); // Programmatically navigate to login
    return null; // Return null since redirection is happening
  }

  // If authenticated, render the protected component
  return <Component />;
};

export default ProtectedRoute;
