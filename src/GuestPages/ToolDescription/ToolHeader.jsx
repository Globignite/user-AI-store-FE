import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RefreshIcon from "@mui/icons-material/Refresh";

const ToolHeader = () => {
  return (
    <Card
      sx={{
        backgroundColor: "primary.cardColor",
        color: "textColor.white",
        maxWidth: "100%",
        borderRadius: 0,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          sx={{ width: "100%", height: "300px", objectFit: "cover" }}
          alt="AI Image Placeholder"
          src="https://via.placeholder.com/900x300" // Placeholder image
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            p: 1,
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src="https://via.placeholder.com/40"
              alt="SRJ Coder"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
            <Typography variant="subtitle1" sx={{ color: "textColor.white" }}>
              Pixo lab
            </Typography>
          </Box>
          <Box>
            <IconButton color="inherit" aria-label="bookmark">
              <BookmarkIcon sx={{ color: "textColor.white" }} />
            </IconButton>
            <IconButton color="inherit" aria-label="refresh">
              <RefreshIcon sx={{ color: "textColor.white" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ToolHeader;
