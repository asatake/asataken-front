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

interface ISideMenuProps {
  item: number;
  open: boolean;
  title: string;
  changePage: (event: any, item: number) => void;
  handleDrawer: () => void;
}

interface ISideMenuState {
  value: number;
}

type ClassNames = keyof typeof styles;

const drawerWidth = 180;
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
    paddingTop: "4.5em",
    zIndex: 2
  }
};

class SideMenu extends React.Component<
  ISideMenuProps & WithStyles<ClassNames>,
  ISideMenuState
> {
  public handleChange(event: React.FormEvent, value: number) {
    this.props.changePage(event, value);
  }

  public navLists() {
    const classes = this.props.classes;
    return (
      <List component="nav" className={classes.navList}>
        <ListItem button={true} onClick={this.props.handleDrawer}>
          {this.props.open ? <ChevronLeft /> : <ChevronRight />}
        </ListItem>
        <Divider />
        <ListItem button={true} onClick={e => this.handleChange(e, 0)}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button={true} onClick={e => this.handleChange(e, 1)}>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Sounds" />
        </ListItem>
        <ListItem button={true} onClick={e => this.handleChange(e, 2)}>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Works" />
        </ListItem>
        <ListItem button={true} onClick={e => this.handleChange(e, 3)}>
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
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles, { withTheme: true })(
  SideMenu
);
