import { createMuiTheme } from "@material-ui/core/styles";
import { green, indigo } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: green[900]
    },
    secondary: {
      main: indigo.A700
    }
  },
  typography: {
    useNextVariants: true
  }
});
