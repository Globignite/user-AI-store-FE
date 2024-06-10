import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Banner = ({title, desc}) => {

    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];


  return (
    <Box sx={{ height:'80vh', display:'flex', color:'textColor.main', flexDirection:'column',  justifyContent:'center', alignItems:'center'}} > 
        <Typography variant="h1" sx={{textAlign:"center", fontSize:{lg:'3rem', md:'2.5rem', sm:'2rem', xs:'1.1rem'}}} dangerouslySetInnerHTML={{ __html: title }} ></Typography>
        <Box sx={{mt:2,  bgcolor:'', width:{lg:'50%', md:'70%', xs:'80%'}, position:'relative'}} >
            <SearchIcon sx={{position:'absolute', fontSize:'2rem', top:'8px', left:'8px', color:'grey'}} />
            <input type="search" className="search_input" placeholder='Search' />
        </Box>  
        <Box>  

        </Box> 
        <Typography variant="body1" sx={{ fontSize:{lg:'1.3rem', md:'1rem', sm:'0.8rem', xs:'0.8rem'}, width:{lg:'80%',  xs:'100%'}, mt:5, color:'textColor.white', textAlign:'center' }} >
        {desc}
        </Typography> 
    </Box>
  )
}

export default Banner;
