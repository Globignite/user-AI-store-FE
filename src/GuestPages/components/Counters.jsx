import { Box, Typography } from "@mui/material"  

const Counters = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', py:2}} >
        <Typography variant="h4" sx={{fontSize:{lg:'2rem', md:'1.8rem', sm:'1.1rem', xs:'0.8rem'}}} color="textColor.counter">15+ industry</Typography>   
        <Typography variant="h4" sx={{fontSize:{lg:'2rem', md:'1.8rem', sm:'1.1rem', xs:'0.8rem'}}} color="textColor.counter">50+ category</Typography>   
        <Typography variant="h4" sx={{fontSize:{lg:'2rem', md:'1.8rem', sm:'1.1rem', xs:'0.8rem'}}} color="textColor.counter">10+ platform</Typography>   
    </Box>
  )
}

export default Counters