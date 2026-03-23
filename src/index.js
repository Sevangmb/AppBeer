import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import "./style.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f57c00",
    },
    secondary: {
      main: "#6d4c41",
    },
    background: {
      default: "#fef5e7",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
  },
});

console.log("React rendering...");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
console.log("React rendered");
