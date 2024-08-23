import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AdvancedSearchModal from "./AdvancedSearchModal";
import { useNavigate } from "react-router-dom";

function SearchSection() {
  const navigate = useNavigate();
  const [price, setPrice] = useState("");
  const [industry, setIndustry] = useState("");
  const [platform, setPlatform] = useState("");
  const [country, setCountry] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setIndustry(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      {/* Search Box */}
      <Box
        sx={{
          mt: 2,
          bgcolor: "",
          width: { lg: "50%", md: "70%", xs: "80%" },
          position: "relative",
          mx: "auto",
        }}
      >
        <SearchIcon
          sx={{
            position: "absolute",
            fontSize: "2rem",
            top: "8px",
            left: "8px",
            color: "grey",
          }}
        />
        <input
          type="search"
          className="search_input"
          placeholder="Search"
          style={{
            width: "100%",
            padding: "12px 40px",
            borderRadius: "40px",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            backgroundColor: "#fff",
            color: "#000",
          }}
        />
      </Box>

      {/* Dropdown Menus */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mt={3}
      >
        {/* Price Dropdown */}
        <FormControl sx={{ minWidth: 150 }} variant="outlined">
          <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Price
          </InputLabel>
          <Select
            value={price}
            onChange={handlePriceChange}
            label="Price"
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#272955", // Background color of dropdown menu
                  color: "#fff", // Text color in dropdown menu
                },
              },
            }}
            sx={{
              backgroundColor: "primary.footer",
              color: "textColor.white",
              "& .MuiSelect-icon": {
                color: "#fff", // Arrow icon color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
            }}
          >
            <MenuItem value="Free">Free</MenuItem>
            <MenuItem value="Freemium">Freemium</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
          </Select>
        </FormControl>

        {/* Industry Dropdown */}
        <FormControl sx={{ minWidth: 150 }} variant="outlined">
          <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Industry
          </InputLabel>
          <Select
            value={industry}
            onChange={handleIndustryChange}
            label="Industry"
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#272955", // Background color of dropdown menu
                  color: "#fff", // Text color in dropdown menu
                },
              },
            }}
            sx={{
              backgroundColor: "primary.footer",
              color: "textColor.white",
              "& .MuiSelect-icon": {
                color: "#fff", // Arrow icon color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
            }}
          >
            <MenuItem value="Tech">Tech</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
          </Select>
        </FormControl>

        {/* Platform Dropdown */}
        <FormControl sx={{ minWidth: 150 }} variant="outlined">
          <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Platform
          </InputLabel>
          <Select
            value={platform}
            onChange={handlePlatformChange}
            label="Platform"
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#272955", // Background color of dropdown menu
                  color: "#fff", // Text color in dropdown menu
                },
              },
            }}
            sx={{
              backgroundColor: "primary.footer",
              color: "textColor.white",
              "& .MuiSelect-icon": {
                color: "#fff", // Arrow icon color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
            }}
          >
            <MenuItem value="Web">Web</MenuItem>
            <MenuItem value="Android">Android</MenuItem>
            <MenuItem value="iOS">iOS</MenuItem>
          </Select>
        </FormControl>

        {/* Country Dropdown */}
        <FormControl sx={{ minWidth: 150 }} variant="outlined">
          <InputLabel sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Country
          </InputLabel>
          <Select
            value={country}
            onChange={handleCountryChange}
            label="Country"
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#272955", // Background color of dropdown menu
                  color: "#fff", // Text color in dropdown menu
                },
              },
            }}
            sx={{
              backgroundColor: "primary.footer",
              color: "textColor.white",
              "& .MuiSelect-icon": {
                color: "#fff", // Arrow icon color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#08a181",
              },
            }}
          >
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="India">India</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.footer",
            color: "textColor.white",
            "&:hover": {
              backgroundColor: "#08a181",
              color: "#000",
            },
            minWidth: 200,
          }}
          onClick={handleOpen}
        >
          Advance Search
        </Button>
        <AdvancedSearchModal open={open} onClose={handleClose} />

        {/* Advance Search Button */}
        <Button
          component={Link}
          to="/search-result"
          variant="contained"
          sx={{
            backgroundColor: "#08a181",
            color: "textColor.white",
            "&:hover": {
              backgroundColor: "#08a181",
              color: "#000",
            },
            minWidth: 200,
          }}
          onClick={() => navigate("/search-result")}
        >
          search
        </Button>
      </Box>
    </Container>
  );
}

export default SearchSection;
