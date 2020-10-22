import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// venuefy theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#201f24",
    },
    secondary: {
      main: "#e3dcd2",
    },
    background: { default: "#FFFFFF", paper: "#201f24" },
  },
});

const venuefyTheme = responsiveFontSizes(theme);

export default venuefyTheme;
