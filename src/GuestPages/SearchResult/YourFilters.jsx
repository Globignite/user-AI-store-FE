 
import { Box, Typography, Chip } from '@mui/material';

function YourFilters() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ color: 'textColor.white', mb: 2 }}>
        Your filters
      </Typography>

      <Box display="flex" gap={2}>
        <Chip
          label="Image"
          sx={{
            backgroundColor: 'primary.footer',
            color: 'textColor.white',
            fontSize: '1rem',
            padding: '8px 16px',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#ffda47',
              color: '#000',
            },
          }}
        />
        <Chip
          label="Vector Graphic"
          sx={{
            backgroundColor: 'primary.footer',
            color: 'textColor.white',
            fontSize: '1rem',
            padding: '8px 16px',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#ffda47',
              color: '#000',
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default YourFilters;
