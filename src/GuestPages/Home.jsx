import { Box, Container } from "@mui/material"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Counters from "./components/Counters"
import Information from "./components/Information"
import GetUpdates from "./components/GetUpdates"
import TopTools from "./components/TopTools"
import Footer from "./components/Footer" 
  
  const Home = () => { 
    return (
      <Box sx={{bgcolor:'primary.main'}}>
          <Navbar /> 
          <Container maxWidth="lg">
              <Counters />
              <Banner title={`Welcome to <br /> Revolutionizing the AI Landscape`} desc={`Embark on a journey into the future of Artificial Intelligence with [Your Website Name].  
      “Our platform is not just another collection of tools it's a dynamic ecosystem 
      designed to empower developers and enthusiasts alike.”`} />
              <TopTools />
              <Information />
              <GetUpdates />
          </Container>
              <Footer />
      </Box>
    )
  }
  
  export default Home