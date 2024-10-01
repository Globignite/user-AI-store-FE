import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

function SignUp() {
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
          Sign Up
        </Typography>

        {/* Name Input */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: "rgba(255, 255, 255, 0.7)" },
          }}
          InputProps={{
            style: {
              backgroundColor: "primary.footer",
              color: "textColor.white",
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

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: "rgba(255, 255, 255, 0.7)" },
          }}
          InputProps={{
            style: {
              backgroundColor: "primary.footer",
              color: "textColor.white",
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
          InputLabelProps={{
            style: { color: "rgba(255, 255, 255, 0.7)" },
          }}
          InputProps={{
            style: {
              backgroundColor: "primary.footer",
              color: "textColor.white",
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

        {/* Confirm Password Input */}
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: "rgba(255, 255, 255, 0.7)" },
          }}
          InputProps={{
            style: {
              backgroundColor: "primary.footer",
              color: "textColor.white",
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

        {/* Sign Up Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#ffda47",
            color: "#000",
            fontWeight: "bold",
            mt: 2,
            "&:hover": {
              backgroundColor: "#ffbf00",
            },
          }}
        >
          Sign Up
        </Button>

        {/* Divider */}
        <Divider sx={{ my: 3, color: "rgba(255, 255, 255, 0.3)" }}>OR</Divider>

        {/* Sign Up with Google Button */}
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
          Sign up with Google
        </Button>

        {/* Already have an account */}
        <Typography variant="body2" sx={{ mt: 3 }}>
          Already have an account?{" "}
          <Link to="/sign-in" style={{ color: "#ffda47" }}>
            Sign In
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignUp;
