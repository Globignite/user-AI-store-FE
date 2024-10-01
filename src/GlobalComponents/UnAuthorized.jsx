import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

function UnAuthorized() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "primary.cardColor",
        color: "textColor.white",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.footer",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
        }}
      >
        <Typography variant="h1" sx={{ color: "textColor.heading", mb: 2 }}>
          403
        </Typography>
        <Typography variant="h4" sx={{ color: "textColor.subHeading", mb: 3 }}>
          Unauthorized Access
        </Typography>
        <Typography variant="body1" sx={{ color: "textColor.cardDesc", mb: 4 }}>
          You do not have the necessary permissions to view this page.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: "textColor.heading",
            color: "#000",
            fontFamily: "fontFamilies.second",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "textColor.subHeading",
            },
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default UnAuthorized;
