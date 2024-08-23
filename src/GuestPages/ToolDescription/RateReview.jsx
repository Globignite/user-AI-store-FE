import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Button,
  TextField,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";
import Rating from "@mui/material/Rating";

function RateReview() {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={6}>
        {/* Reviews Section */}
        <Grid item xs={12} md={5}>
          <Typography variant="h5" sx={{ color: "textColor.heading", mb: 2 }}>
            Reviews
          </Typography>

          {[
            { label: "5", value: 55 },
            { label: "4", value: 32 },
            { label: "3", value: 16 },
            { label: "2", value: 8 },
            { label: "1", value: 6 },
          ].map((rating, index) => (
            <Box key={index} display="flex" alignItems="center" mb={1}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: 24,
                  color: yellow[700],
                }}
              >
                {rating.label}{" "}
                <StarIcon sx={{ fontSize: 16, color: yellow[700] }} />
              </Typography>
              <Box sx={{ flexGrow: 1, mx: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={rating.value}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: yellow[700],
                    },
                    height: 20,
                  }}
                />
              </Box>
              <Typography
                sx={{ color: "textColor.white" }}
              >{`${rating.value}%`}</Typography>
            </Box>
          ))}
        </Grid>

        {/* Rate & Review Section */}
        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{ color: "textColor.heading", mb: 2 }}>
            Rate & Review
          </Typography>

          {/* Star Rating */}
          <Box display="flex" alignItems="center" mb={2}>
            <Rating
              name="rating"
              value={0}
              precision={1}
              emptyIcon={<StarIcon fontSize="inherit" sx={{ color: "#333" }} />}
              icon={<StarIcon fontSize="inherit" sx={{ color: yellow[700] }} />}
            />
          </Box>

          {/* Comment Section */}
          <Box mb={2}>
            <Typography sx={{ color: "textColor.main", mb: 1 }}>
              Your Comment:
            </Typography>
            <TextField
              placeholder="Message :"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: "primary.cardColor",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.2)",
                  },
                  "&:hover fieldset": {
                    borderColor: yellow[700],
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: yellow[700],
                  },
                  color: "textColor.white",
                },
              }}
            />
          </Box>

          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: yellow[700],
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: yellow[800],
              },
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RateReview;
