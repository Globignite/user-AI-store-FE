import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Checkbox,
  Grid,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const sidebarMenu = [
  { label: "Price", content: ["Free", "Paid", "Subscription"] },
  { label: "Rating", content: ["5 Stars", "4 Stars", "3 Stars"] },
  { label: "Platform", content: ["Web", "Mobile", "Desktop"] },
  { label: "Country", content: ["USA", "UK", "India"] },
  {
    label: "Industry",
    content: [
      "Music Composition",
      "Video Editing",
      "Game Development",
      "Photography",
    ],
  },
  { label: "Environmental Sciences", content: [] },
  { label: "Security & Surveillance", content: [] },
  { label: "Ethics & Society", content: [] },
  { label: "Healthcare", content: [] },
];

function AdvancedSearchModal({ open, onClose }) {
  const [selectedMenu, setSelectedMenu] = useState(sidebarMenu[0].label); // First item selected by default
  const [checked, setChecked] = useState({}); // To track the checkboxes state

  // Handle sidebar item click
  const handleMenuClick = (label) => {
    setSelectedMenu(label);
  };

  // Handle checkbox click
  const handleToggle = (value) => {
    setChecked((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  // Find the selected menu content
  const selectedMenuContent =
    sidebarMenu.find((item) => item.label === selectedMenu)?.content || [];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "70%",
          margin: "100px auto",
          bgcolor: "#1f2a56",
          color: "#fff",
          borderRadius: 2,
          padding: 2,
          boxShadow: 24,
          position: "relative",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, color: "#0aec84" }}>
          Advance Search
        </Typography>
        <CloseIcon
          sx={{
            position: "absolute",
            right: 3,
            top: 3,
            cursor: "pointer",
          }}
          onClick={onClose}
        />
        <Box
          sx={{
            display: "flex",
            height: "60vh",
            position: "relative",
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: "25%",
              borderRight: "1px solid rgba(255, 255, 255, 0.2)",
              overflowY: "auto",
            }}
          >
            <List>
              {sidebarMenu.map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    selected={item.label === selectedMenu}
                    onClick={() => handleMenuClick(item.label)}
                    sx={{
                      bgcolor:
                        item.label === selectedMenu ? "#2f4078" : "transparent",
                      color: "#fff",
                      "&:hover": { bgcolor: "#3f50b5" },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Content Area */}
          <Box sx={{ width: "75%", overflowY: "auto", paddingLeft: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {selectedMenu}
            </Typography>
            {selectedMenuContent.length > 0 ? (
              <Grid container spacing={2}>
                {selectedMenuContent.map((contentItem, index) => (
                  <Grid item xs={12} key={index}>
                    <Box display="flex" alignItems="center">
                      <Checkbox
                        checked={checked[contentItem] || false}
                        onChange={() => handleToggle(contentItem)}
                        sx={{
                          color: "#fff",
                          "&.Mui-checked": { color: "#0aec84" },
                        }}
                      />
                      <Typography variant="body1">{contentItem}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography>No options available for this category.</Typography>
            )}

            {/* Search Button */}
            <Box
              sx={{
                textAlign: "right",
                bottom: 0,
                right: 0,
                position: "absolute",
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0aec84",
                  "&:hover": { bgcolor: "#1cefa9" },
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default AdvancedSearchModal;
