import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Drawer,
  Divider,
  ListItemText,
  ListItemIcon,
  Typography
} from "@material-ui/core/";
import {
  Home,
  MusicNote,
  Work,
  Info,
  ChevronLeft,
  ChevronRight
} from "@material-ui/icons";
import classNames from "classnames";
import { RouteComponentProps, withRouter } from "react-router";

interface Props extends RouteComponentProps<{}> {
  item: number;
  open: boolean;
  title: (location: string) => string;
  changePage: (event: any, item: number) => void;
  handleDrawer: () => void;
}

interface State {
  value: number;
}

type ClassNames = keyof typeof styles;

const drawerWidth = 240;
const drawerShiftWidth = 60;
const styles = {
  root: {
    width: "100%",
    display: "flex"
  },
  appBar: {
    zIndex: 5
  },
  drawer: {
    position: "fixed",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: 2
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex: 2,
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease"
  },
  drawerClose: {
    overflowX: "hidden",
    width: drawerShiftWidth,
    zIndex: 2,
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease"
  },
  navList: {
    paddingTop: "4em",
    zIndex: 2
  }
};

class SideMenu extends React.Component<Props & WithStyles<ClassNames>, State> {
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

  public navLists() {
    const classes = this.props.classes;
    return (
      <List component="nav" className={classes.navList}>
        <ListItem button={true} onClick={this.props.handleDrawer}>
          {this.props.open ? <ChevronLeft /> : <ChevronRight />}
        </ListItem>
        <Divider />
        <ListItem button={true} onClick={e => this.handleHistory(e, 0)}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button={true} onClick={e => this.handleHistory(e, 1)}>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Sounds" />
        </ListItem>
        <ListItem button={true} onClick={e => this.handleHistory(e, 2)}>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Works" />
        </ListItem>
        <ListItem button={true} onClick={e => this.handleHistory(e, 3)}>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    );
  }

  public render() {
    const classes = this.props.classes;
    return (
      <div>
        <Drawer
          open={this.props.open}
          anchor="left"
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.props.open,
            [classes.drawerClose]: !this.props.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.props.open,
              [classes.drawerClose]: !this.props.open
            })
          }}
        >
          {this.navLists()}
        </Drawer>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h5"
              component="h1"
              color="inherit"
              noWrap={true}
            >
              {this.props.title(this.props.location.pathname)}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles, { withTheme: true })(
  withRouter(SideMenu)
);
