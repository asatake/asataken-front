import * as React from "react";
import { Typography, Card } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";

type ClassName = keyof typeof styles;

const styles = {
  root: {
    width: "100%",
  },
  content: {
    zIndex: 1,
  }
}

class Top extends React.Component<{} & WithStyles<ClassName>, {}> {
  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.content}>
        <Card>
          <Typography variant="title" component="h2">
            Welcome to asatakecom!!
          </Typography>
          <Typography component="p">ようこそ</Typography>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Top);
