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
  title: string;
  changePage: (event: any, item: number) => void;
}

interface ISideMenuState {
  value: number;
  open: boolean;
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
    zIndex: 2
  },
  drawerClose: {
    overflowX: "hidden",
    width: drawerShiftWidth,
    zIndex: 2
    // width: theme.spacing.unit * 7 + 1
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
  constructor(props: ISideMenuProps & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      value: 0,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  public handleChange(event: React.FormEvent, value: number) {
    this.props.changePage(event, value);
  }

  public handleDrawer(event: React.FormEvent) {
    this.setState({ open: !this.state.open });
  }

  public navLists() {
    const classes = this.props.classes;
    return (
      <List component="nav" className={classes.navList}>
        <ListItem button={true} onClick={this.handleDrawer}>
          {this.state.open ? <ChevronLeft /> : <ChevronRight />}
        </ListItem>
        <Divider />
        <ListItem button={true}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button={true} value={1}>
          <ListItemIcon>
            <MusicNote />
          </ListItemIcon>
          <ListItemText primary="Sounds" />
        </ListItem>
        <ListItem button={true} value={2}>
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Works" />
        </ListItem>
        <ListItem button={true} value={3}>
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
          open={this.state.open}
          anchor="left"
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
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
