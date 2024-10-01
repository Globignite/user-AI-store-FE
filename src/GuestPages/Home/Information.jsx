import { Box, Grid, Typography } from "@mui/material"

const Information = () => {


  return (
    <Box>
        <Grid container >
            <Grid item lg={6} md={6} xs={12} >
                <Typography variant="h5" color="textColor.heading" fontSize={{lg:'1.5rem', md:'1.4rem', xs:'1.2rem'}} >Curated AI Tool Listings</Typography>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Diverse Categories</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">From image editing to deep learning and robotics, explore tools across the spectrum of AI.</Typography>
                </Box>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Quality at Your Fingertips</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Each listing is rigorously vetted for quality and reliability, ensuring you get the best.</Typography>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12} ></Grid>
        </Grid>


        <Grid container sx={{mt:5}} >
            <Grid item lg={6} md={6} xs={12} ></Grid>
            <Grid item lg={6} md={6} xs={12} >
                <Typography variant="h5" color="textColor.heading" fontSize={{lg:'1.5rem', md:'1.4rem', xs:'1.2rem'}} >Advanced Search & Discovery</Typography>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Find What Fits</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Use our advanced filters to narrow down to the exact tools you need by category, functionality, or even developer location.</Typography>
                </Box>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Discover the Undiscovered</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Our intelligent recommendation engine suggests tools that match your interests and needs.</Typography>
                </Box>
            </Grid>
        </Grid>


        <Grid container sx={{mt:5}} >
            <Grid item lg={6} md={6} xs={12} >
                <Typography variant="h5" color="textColor.heading" fontSize={{lg:'1.5rem', md:'1.4rem', xs:'1.2rem'}} >Community Insights & Reviews</Typography>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Real User Reviews</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Get honest feedback from a community of users. Learn from their experiences to choose the right tools for your project.</Typography>
                </Box>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Rate & Review</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Share your insights on tools you’ve used to guide fellow users.</Typography>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12} ></Grid>
        </Grid>


        <Grid container sx={{mt:5}} >
            <Grid item lg={6} md={6} xs={12} ></Grid>
            <Grid item lg={6} md={6} xs={12} >
                <Typography variant="h5" color="textColor.heading" fontSize={{lg:'1.5rem', md:'1.4rem', xs:'1.2rem'}} >Developer & Tool Profiles</Typography>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">In-depth Information</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Access comprehensive profiles with key details, documentation, and usage guides.</Typography>
                </Box>
                <Box sx={{ mt:2,}} >
                    <Typography variant="body1" sx={{fontWeight:'bold', fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.subHeading">Showcase Your Work</Typography>
                    <Typography variant="body1" sx={{ fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">Developers can easily list and manage their tools, reaching a global audience.</Typography>
                </Box>
            </Grid>
        </Grid>

    </Box>
  )
}

export default Information