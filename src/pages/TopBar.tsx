import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";

interface ITopMenuProps {
  title: string;
}

const styles = {
  root: {
    width: "100%",
    zIndex: 1,
  }
};

class TopMenu extends React.Component<ITopMenuProps> {
  public render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="h1" color="inherit">
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopMenu);
