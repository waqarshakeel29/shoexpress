import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 11,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#017c8a",
    },
    secondary: {
      main: "#72b1b9",
    },
    error: {
      main: "#f43636",
    },
    success: {
      main: "#66bb66",
    },
    info: {
      main: "#29b9f6",
    },
    warning: {
      main: "#ff9b26",
    },
  },
  // breakpoints: {
  //   values: {
  //       xs: 0,
  //       sm: 400,
  //       md: 600,
  //       lg: 900,
  //       xl: 1200,
  //     },
  // },
};

export const theme = createTheme(themeOptions);
