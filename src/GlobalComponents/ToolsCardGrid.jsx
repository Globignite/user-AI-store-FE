import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

function ToolsCardGrid() {
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      title: "Pixo lab",
      description: "We provide the immense experience with image generation...",
      detailedDescription: "Art, Image Generation, Productivity, Image tool",
      rating: "3.5/5",
      votes: "300 votes",
      platform: "web",
      price: "Free",
      logo: "https://via.placeholder.com/100", // Replace with the actual logo URL
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
    },
    {
      id: 3,
      title: "Pixo lab",
      description: "We provide the immense experience with image generation...",
      detailedDescription: "Art, Image Generation, Productivity, Image tool",
      rating: "3.5/5",
      votes: "300 votes",
      platform: "web",
      price: "Free",
      logo: "https://via.placeholder.com/100", // Replace with the actual logo URL
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
    },
    {
      id: 4,
      title: "Pixo lab",
      description: "We provide the immense experience with image generation...",
      detailedDescription: "Art, Image Generation, Productivity, Image tool",
      rating: "3.5/5",
      votes: "300 votes",
      platform: "web",
      price: "Free",
      logo: "https://via.placeholder.com/100", // Replace with the actual logo URL
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
    },
    {
      id: 5,
      title: "Pixo lab",
      description: "We provide the immense experience with image generation...",
      detailedDescription: "Art, Image Generation, Productivity, Image tool",
      rating: "3.5/5",
      votes: "300 votes",
      platform: "web",
      price: "Free",
      logo: "https://via.placeholder.com/100", // Replace with the actual logo URL
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
    },
    {
      id: 6,
      title: "Pixo lab",
      description: "We provide the immense experience with image generation...",
      detailedDescription: "Art, Image Generation, Productivity, Image tool",
      rating: "3.5/5",
      votes: "300 votes",
      platform: "web",
      price: "Free",
      logo: "https://via.placeholder.com/100", // Replace with the actual logo URL
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
    },
    {
      id: 7,
      title: "Pixo lab",
      description: "We provide the immense experience with image generation...",
      detailedDescription: "Art, Image Generation, Productivity, Image tool",
      rating: "3.5/5",
      votes: "300 votes",
      platform: "web",
      price: "Free",
      logo: "https://via.placeholder.com/100", // Replace with the actual logo URL
      image: "https://via.placeholder.com/300x200", // Replace with the actual image URL
    },
  ];

  return (
    <Box sx={{ marginBlock: 5 }}>
      <Grid container spacing={4}>
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <Card
              sx={{
                backgroundColor: "primary.cardColor",
                color: "textColor.white",
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => navigate("/tool/345")}
            >
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{ width: "100%" }}
              />
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar
                    src={card.logo}
                    alt={card.title}
                    sx={{ width: 40, height: 40, mr: 2 }}
                  />
                  <Typography variant="h6" sx={{ color: "textColor.white" }}>
                    {card.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "textColor.main", mb: 2 }}
                >
                  {card.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "textColor.heading", fontWeight: "bold" }}
                >
                  {card.detailedDescription}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  mt={2}
                  justifyContent="space-between"
                >
                  <Typography variant="body2" sx={{ color: "textColor.main" }}>
                    {card.rating} • {card.votes}
                  </Typography>
                  <Box display="flex" gap={1}>
                    <Chip
                      label={card.platform}
                      sx={{
                        backgroundColor: "primary.footer",
                        color: "textColor.white",
                      }}
                    />
                    <Chip
                      label={card.price}
                      sx={{
                        backgroundColor: "primary.footer",
                        color: "textColor.white",
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ToolsCardGrid;
