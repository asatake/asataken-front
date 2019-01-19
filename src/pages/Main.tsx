import * as React from "react";
import { theme } from "../theme";
import { MuiThemeProvider, CssBaseline, Hidden } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Top from "./Top";
import Sounds from "./Sounds";
import About from "./About";
import Works from "./Works";
import BottomMenu from "./BottomMenu";
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";
import classNames from "classnames";

interface IMenuProps {}

interface IMenuState {
  item: number;
  open: boolean;
}

type ClassNames = keyof typeof styles;

const drawerWidth = 240;
const drawerShiftWidth = 60;
const styles = {
  root: {
    width: "100%"
  },
  content: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  body: {
    width: "100%"
  },
  contentOpen: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease"
  },
  contentClose: {
    width: `calc(100% - ${drawerShiftWidth}px)`,
    marginLeft: drawerShiftWidth,
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease"
  }
};

class Main extends React.Component<
  IMenuProps & WithStyles<ClassNames>,
  IMenuState
> {
  constructor(props: IMenuProps & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      item: 0,
      open: true
    };
    this.changePage = this.changePage.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.content = this.content.bind(this);
  }

  public route(item: number) {
    if (item === 1) {
      return <Sounds />;
    } else if (item === 2) {
      return <Works />;
    } else if (item === 3) {
      return <About />;
    } else {
      return <Top />;
    }
  }

  public title(item: number) {
    const prefix: string = "asataken / ";
    if (item === 1) {
      return prefix + "Sounds";
    } else if (item === 2) {
      return prefix + "Works";
    } else if (item === 3) {
      return prefix + "About";
    } else {
      return prefix + "Top";
    }
  }

  public content() {
    const classes = this.props.classes;

    return (
      <div className={classes.content}>
        <CssBaseline />
        {this.route(this.state.item)}
      </div>
    );
  }

  public changePage(event: any, item: number) {
    this.setState({ item });
  }

  public handleDrawer() {
    this.setState({ open: !this.state.open });
  }

  public render() {
    const classes = this.props.classes;
    return (
      <div style={{ marginTop: "5em", marginBottom: "5em" }}>
        <MuiThemeProvider theme={theme}>
          <Hidden mdUp={true}>
            <CssBaseline />
            {this.content()}
            <TopBar title={this.title(this.state.item)} />
            <BottomMenu item={this.state.item} changePage={this.changePage} />
          </Hidden>
          <Hidden smDown={true}>
            <CssBaseline />
            <div
              className={classNames(classes.body, {
                [classes.contentOpen]: this.state.open,
                [classes.contentClose]: !this.state.open
              })}
            >
              {this.content()}
            </div>
            <SideMenu
              item={this.state.item}
              open={this.state.open}
              title={this.title(this.state.item)}
              changePage={this.changePage}
              handleDrawer={this.handleDrawer}
            />
          </Hidden>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles, { withTheme: true })(Main);
