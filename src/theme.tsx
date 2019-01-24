import { createMuiTheme } from "@material-ui/core/styles";
import { green, deepOrange } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: green[800]
    },
    secondary: {
      main: deepOrange[800]
    }
  },
  typography: {
    useNextVariants: true
  }
});
