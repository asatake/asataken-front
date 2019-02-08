import * as React from "react";
import { Typography, Card, Divider, CardContent, Fab } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import { MusicNote } from "@material-ui/icons";
import { withRouter, RouteComponentProps } from "react-router";
import News from "../components/News";

type ClassName = keyof typeof styles;

const styles = {
  root: {
    width: "100%"
  },
  content: {
    zIndex: 1
  },
  welcome: {
    marginBottom: "1em",
    marginTop: "0.5em",
    backgroundColor: indigo[400]
  },
  subContent: {
    marginBottom: "1em",
    marginTop: "1em"
  },
  white: {
    color: "white"
  }
};

interface ITopProps extends RouteComponentProps<{}> {
  changePage: (event: any, item: number) => void;
}

class Top extends React.Component<ITopProps & WithStyles<ClassName>, {}> {
  public handleHistory(event: any, item: number) {
    if (item === 1) {
      this.props.history.push("/sounds");
    } else if (item === 2) {
      this.props.history.push("/works");
    } else if (item === 3) {
      this.props.history.push("/about");
    } else {
      this.props.history.push("/");
    }
    this.props.changePage(event, item);
  }

  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.content}>
        <div>
          <Card component="div" className={classes.welcome} color="secondary">
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                color="inherit"
                className={classes.white}
              >
                音楽素材・効果音素材の asatakenへようこそ
              </Typography>
              <div className={classes.subContent}>
                <Divider variant="middle" className={classes.white} />
              </div>
              <Typography
                variant="caption"
                component="p"
                color="inherit"
                className={classes.white}
              >
                あさた研では、音楽の利用で作品の幅を広げたい方を応援しています。
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Divider />
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">
              更新情報
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <News />
        </Card>
        <div className={classes.subContent}>
          <Typography variant="h6" component="h3">
            音楽素材はこちらから
          </Typography>
          <Fab
            variant="extended"
            color="primary"
            onClick={(e: any) => this.handleHistory(e, 1)}
            disabled={true}
          >
            <MusicNote />
            Sounds (工事中)
          </Fab>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Top));
