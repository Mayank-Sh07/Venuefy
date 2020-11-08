import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserContextProvider from "./UserContext";
import { ThemeProvider } from "@material-ui/core/styles";
import venuefyTheme from "./Theme/theme";
import "./index.css";

ReactDOM.render(
  <UserContextProvider>
    <ThemeProvider theme={venuefyTheme}>
      <App />
    </ThemeProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
