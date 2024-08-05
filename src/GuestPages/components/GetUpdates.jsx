import { Box, Grid, Typography, Button, styled } from "@mui/material"

const GetUpdates = () => {

      const GradientBox = styled(Box)(({theme}) => ({
        border: '2px solid',
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(180.5deg, #253a5f 20%, #253a5f 68%, rgba(0,0,0,1) 98%)`,
        borderRadius:'15px',
    }));

  return (
    <Grid container sx={{ py:10, mt:{lg:20, md:20, xs:10} }} >
        <Grid item lg={6} md={6} xs={12}>
            <Typography variant="h5" color="textColor.heading" fontSize={{lg:'1.5rem', md:'1.4rem', xs:'1.2rem'}} >Get Updates</Typography>
            <Typography variant="body1" sx={{ fontSize:'1.1rem', mt:1, fontSize:{lg:'1.1rem', md:'1rem', xs:'0.9rem'}}} color="textColor.white">submit your email and get latest updates on your mail</Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12} mt={{lg:0, md:0, xs:3}} >
            <Box sx={{  display:'flex', alignItems:'center', p:0.8, border:'2px solid #253a5f', borderRadius:4}} >
                <input type="email" style={{color:'#ededf0'}} className="update_email" placeholder="Email" />
                <Button sx={{color:'textColor.', px:3, bgcolor:'textColor.heading', borderRadius:2, fontSize:'1rem', '&:hover':{color:'textColor.', bgcolor:'textColor.heading'}  }} >Submit</Button>
            </Box>
        </Grid>
    </Grid>
  )
}

export default GetUpdates