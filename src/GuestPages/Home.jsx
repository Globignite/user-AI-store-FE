import { Box, Container, Typography } from "@mui/material";
import Counters from "./components/Counters";
import Information from "./components/Information";
import GetUpdates from "./components/GetUpdates";
import TopTools from "./components/TopTools";
import Footer from "./components/Footer";
import SearchSection from "./components/SearchSection";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "primary.main" }}>
      <Container maxWidth="lg">
        <Counters />
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { lg: "3rem", md: "2.5rem", sm: "2rem", xs: "1.1rem" },
            color: "textColor.main",
          }}
        >
          Welcome to <br />
          Revolutionizing the AI Landscape
        </Typography>
        <SearchSection />
        <Typography
          variant="body1"
          sx={{
            fontSize: { lg: "1.3rem", md: "1rem", sm: "0.8rem", xs: "0.8rem" },
            fontFamily: "Orbitron",
            fontWeight: "bold",
            width: { lg: "80%", xs: "100%" },
            mt: 5,
            color: "textColor.white",
            textAlign: "center",
            marginInline:"auto"
          }}
        >
          Embark on a journey into the future of Artificial Intelligence with
          [Your Website Name]. “Our platform is not just another collection of
          tools it's a dynamic ecosystem designed to empower developers and
          enthusiasts alike.”
        </Typography>
        <TopTools />
        <Information />
        <GetUpdates />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
