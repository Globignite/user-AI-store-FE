import { Box, Grid, Typography, Container } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
        <Box bgcolor="primary.footer"  >
            <Container maxWidth="lg" sx={{position:'relative'}}>
                <Grid container sx={{ py: 10 }}>
                    <Grid item lg={4} md={4} xs={12} px={{ lg: 1, xs: 0 }}  >
                        <Typography variant="body1" fontWeight="bold" fontSize={{ lg: '1.5rem', md: '1.3rem', xs: '1rem' }} color="textColor.white" >AI Cart</Typography>
                        <Typography variant="body1" color="textColor.main" mt={1} fontSize={{ lg: '0.7rem', md: '0.6rem', xs: '0.5rem' }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sit! Quia suscipit quibusdam similique, vero nihil optio. Ducimus impedit, soluta dolore, minus delectus excepturi quia eum ullam quasi non eaque porro nesciunt.
                        </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} mt={{ lg: 0, xs: 3 }} px={{ lg: 1, xs: 0 }} sx={{ display: 'flex', justifyContent: { lg: 'center', md: 'center', xs: 'start' } }} >
                        <Box sx={{ bgcolor: '', mt: { lg: 5, xs: '2' } }} >
                            <Typography variant="body1" fontSize="0.9rem" fontWeight="bold" color="grey">Links</Typography>
                            <Box color="textColor.white" mt={1} fontSize="0.8rem" >
                                <Box mt={1} >About</Box>
                                <Box mt={1} >Terms And Service </Box>
                                <Box mt={1} >Privacy Policy </Box>
                                <Box mt={1} >Cookie Polity</Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} px={{ lg: 1, xs: 0 }} sx={{display:'flex', alignItems:'end', justifyContent:'end', flexDirection:'column'}}  >
                        <Box sx={{color:'textColor.white',  width:'100%', display:'flex', mt:{lg:0, md:0, xs:5}, justifyContent:{lg:'flex-end', md:'flex-end', xs:'flex-start'}}} >
                            <FacebookIcon sx={{mr:1, cursor:'pointer'}}  />
                            <XIcon sx={{mr:1, cursor:'pointer'}} /> 
                            <InstagramIcon sx={{ cursor:'pointer'}} /> 
                            {/* <YouTubeIcon sx={{ cursor:'pointer'}} />  */}
                        </Box>
                    </Grid>

 
                </Grid>
                        <Box onClick={scrollToTop} sx={{cursor:'pointer', position:'absolute', top:'40px', right:{lg:'30px', md:'30px', xs:'20px'}, color:'textColor.white', border:'1px  solid #fff', width:'40px', height:'40px', display:'flex', justifyContent:'center', alignItems:'center'}} >
                            <KeyboardArrowUpIcon />
                        </Box>

                        <Typography variant="body1" color="textColor.main" sx={{textAlign:'center'}} >Copyright © {new Date().getFullYear()} AI Cart</Typography>
            </Container>

        </Box>
    )
}

export default Footer