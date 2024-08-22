import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#171d3b",
      navbar: "#272955",
      nav_btn: "#201662",
      cardColor: "#151d34",
      footer: "#0d1225",
    },
    textColor: {
      main: "#cdcdcd",
      counter: "#cdcdcd42",
      white: "#ededf0",
      heading: "#08a181",
      subHeading: "#4170b3",
      cardDesc: "#abf4fb",
    },
    fontFamilies: {
      main: '"Orbitron", sans-serif',
      second: '"Poppins", sans-serif',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "light",
    },
    h4: {
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "light",
    },
    h5: {
      fontFamily: "'Orbitron', sans-serif",
      fontWeight: "light",
    },
    allVariants: {
      fontFamily: '"Poppins", sans-serif',
    },
    button: {
      textTransform: "none",
    },
  },
});
