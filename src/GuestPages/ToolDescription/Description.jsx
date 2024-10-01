 
import { Container, Grid, Box, Typography, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
 

function Description() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={5}>
        {/* Left Column - Video with Play Button */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#171d3b",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box
              component="img"
              src="https://via.placeholder.com/500x300" // Placeholder image for the video
              alt="Video Thumbnail"
              sx={{ width: "100%", height: "auto", objectFit: "cover" }}
            />

            {/* Play Button Overlay */}
            <IconButton
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "50%",
                padding: 1,
              }}
            >
              <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Column - Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ color: "#cdcdcd" }}>
            <Typography variant="body1">
              To develop an accessible, user-friendly online platform that
              enables AI tool developers to showcase their products and allows
              users to efficiently find AI tools that meet their needs,
              categorized by function, application, and other relevant criteria.
              To develop an accessible, user-friendly online platform that
              enables AI tool developers to showcase their products and allows
              users to efficiently find AI tools that meet their needs,
              categorized by function, application, and other relevant criteria.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Description;
