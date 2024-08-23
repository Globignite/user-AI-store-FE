import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const OpenNavbar = () => {
    setToggleNavbar(true);
  };
  const CloseNavbar = () => {
    setToggleNavbar(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "50px",
        bgcolor: "primary.navbar",
        color: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: 5000,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "50%", color: "textColor.main" }}>
          <Typography variant="body1" fontSize="1.3rem">
            AI Cart
          </Typography>
        </Box>
        <Box
          sx={{
            width: { lg: "50%", xs: "100%" },
            display: "flex",
            position: { lg: "relative", xs: "fixed" },
            height: { lg: "100%", xs: "100vh" },
            top: "0px",
            left: { lg: "0%", xs: toggleNavbar ? "0%" : "100%" },
            transition: "all 0.1s linear",
            zIndex: 1000,
          }}
        >
          <Box
            onClick={CloseNavbar}
            sx={{
              display: { lg: "none", xs: "block" },
              height: "100vh",
              width: "20%",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          ></Box>
          <Box
            sx={{
              width: { lg: "100%", xs: "80%" },
              bgcolor: "primary.navbar",
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              color: "textColor.main",
              justifyContent: { lg: "end", xs: "flex-start" },
              p: { lg: 0, xs: 3 },
              alignItems: { lg: "center", xs: "start" },
            }}
          >
            <Box sx={{ mr: 5, cursor: "pointer", py: { lg: 0, xs: 1 } }}>
              <Typography
                component={Link}
                to="/"
                variant="body1"
                sx={{ color: "textColor.main", textDecoration: "none" }}
                fontSize={{ lg: "1rem", xs: "1.3rem" }}
              >
                Home
              </Typography>
            </Box>
            <Box sx={{ mr: 5, cursor: "pointer", py: { lg: 0, xs: 1 } }}>
              <Typography
                component={Link}
                to="/search-page"
                variant="body1"
                sx={{ color: "textColor.main", textDecoration: "none" }}
                fontSize={{ lg: "1rem", xs: "1.3rem" }}
              >
                Latest tools
              </Typography>
            </Box>
            <Box sx={{ mr: 5, cursor: "pointer", py: { lg: 0, xs: 1 } }}>
              <Typography
                component={Link}
                to="/about"
                variant="body1"
                sx={{ color: "textColor.main", textDecoration: "none" }}
                fontSize={{ lg: "1rem", xs: "1.3rem" }}
              >
                About
              </Typography>
            </Box>
            <Box sx={{ mr: 5, cursor: "pointer", py: { lg: 0, xs: 1 } }}>
              <Typography
                component={Link}
                to="/sign-in"
                variant="body1"
                sx={{ color: "textColor.main", textDecoration: "none" }}
                fontSize={{ lg: "1rem", xs: "1.3rem" }}
              >
                Sign in
              </Typography>
            </Box>
            <Box
              sx={{
                py: 1,
                px: { lg: 2, xs: 0 },
                cursor: "pointer",
                bgcolor: { lg: "primary.nav_btn" },
                borderRadius: 8,
                boxShadow: { lg: "1px 1px 20px rgba(0,0,0,0.2)", xs: "none" },
              }}
            >
              <Typography fontSize={{ lg: "1rem", xs: "1.3rem" }}>
                Add your tool
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: { lg: "none", xs: toggleNavbar ? "none" : "flex" } }}
          onClick={OpenNavbar}
        >
          <MenuIcon />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
