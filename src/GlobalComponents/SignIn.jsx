import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Divider,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../RoutingsAndLayouts/UserContext";

function SignIn() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // Access user context
  const { setUser } = useUser();

  // State to manage form data, validation errors, and API errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState({});
  const [loading, setLoading] = useState(false);

  // Simple email format validation
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setValidationError(errors);

    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Reset error state
    setError(null);
    setLoading(false);

    // Validate form before proceeding
    if (!validateForm()) return;

    setLoading(true); // Set loading state

    // Prepare FormData
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    // Dummy API request
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log(data); // Handle successful response

      // Update the UserContext after successful sign-in
      setUser({
        userRole: "user", // Set the actual user role after sign-in
        isSignedIn: true,
        name: "Suraj",
      });

      // After sign-in, redirect user
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message); // Set API error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          backgroundColor: "primary.cardColor",
          color: "textColor.white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          mt: 8,
        }}
      >
        <Typography variant="h4" sx={{ color: "textColor.heading", mb: 3 }}>
          Sign In
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <form onSubmit={handleSignIn}>
          {/* Email Input */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!validationError.email}
            helperText={validationError.email}
            InputLabelProps={{
              style: { color: "rgba(255, 255, 255, 0.7)" },
            }}
            InputProps={{
              style: {
                color: "#fff", // Set text color to white
                backgroundColor: "primary.footer",
                borderColor: "rgba(255,255,255,0.3)",
              },
              sx: {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#ffda47",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffda47",
                },
              },
            }}
          />

          {/* Password Input */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!validationError.password}
            helperText={validationError.password}
            InputLabelProps={{
              style: { color: "rgba(255, 255, 255, 0.7)" },
            }}
            InputProps={{
              style: {
                color: "#fff", // Set text color to white
                backgroundColor: "primary.footer",
                borderColor: "rgba(255,255,255,0.3)",
              },
              sx: {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "#ffda47",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffda47",
                },
              },
            }}
          />

          {/* Sign In Button */}
          <Button
            variant="contained"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "#ffda47",
              color: "#000",
              fontWeight: "bold",
              mt: 2,
              "&:hover": {
                backgroundColor: "#ffbf00",
              },
            }}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {/* Divider */}
        <Divider sx={{ my: 3, color: "rgba(255, 255, 255, 0.3)" }}>OR</Divider>

        {/* Sign In with Google Button */}
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          sx={{
            borderColor: "#ffda47",
            color: "#ffda47",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "#ffda47",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          Sign in with Google
        </Button>

        {/* Create Account Link */}
        <Typography variant="body2" sx={{ mt: 3 }}>
          Don't have an account?{" "}
          <Link to="/sign-up" style={{ color: "#ffda47" }}>
            Create Account
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignIn;
