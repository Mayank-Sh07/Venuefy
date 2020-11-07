import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

// venuefy theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#201f24",
    },
    secondary: {
      light: "#F0ECE6",
      main: "#D1C2AF",
    },
    background: { default: "#FFFFFF", paper: "#201f24" },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const venuefyTheme = responsiveFontSizes(theme);

export default venuefyTheme;
