import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import { RouteComponentProps, withRouter } from "react-router";

interface ITopMenuProps extends RouteComponentProps<{}> {
  title: (location: string) => string;
}

const styles = {
  root: {
    width: "100%",
    zIndex: 1
  }
};

class TopMenu extends React.Component<ITopMenuProps> {
  public render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography variant="h5" component="h1" color="inherit">
            {this.props.title(this.props.location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(withRouter(TopMenu));
