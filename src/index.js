import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import venuefyTheme from "./Theme/theme";

ReactDOM.render(
  <ThemeProvider theme={venuefyTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
