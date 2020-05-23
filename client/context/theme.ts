import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#95389e",
    },
    secondary: {
      main: "#43d8c9",
    },
    background: {
      default: "#fff",
    },
  },
});

export { theme };
