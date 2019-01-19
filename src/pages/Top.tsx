import * as React from "react";
import {
  Typography,
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  CardContent,
  Fab
} from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { MusicNote } from "@material-ui/icons";

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
    backgroundColor: deepOrange[600]
  },
  subContent: {
    marginBottom: "1em",
    marginTop: "1em"
  },
  white: {
    color: "white"
  }
};

interface ITopProps {
  changePage: (event: any, item: number) => void;
}

class Top extends React.Component<ITopProps & WithStyles<ClassName>, {}> {
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
          <List>
            <ListItem>
              <ListItemText primary="test" secondary="2018/02/01" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="test2" secondary="2018/01/01" />
            </ListItem>
          </List>
        </Card>
        <div className={classes.subContent}>
          <Typography variant="h6" component="h3">
            音楽素材はこちらから
          </Typography>
          <Fab
            variant="extended"
            color="primary"
            onClick={(e: any) => this.props.changePage(e, 1)}
          >
            <MusicNote />
            Sounds
          </Fab>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Top);
