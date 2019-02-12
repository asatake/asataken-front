import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme";
import { MuiThemeProvider, Hidden } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import BottomMenu from "./BottomMenu";
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";
import Router from "../Router";
import classNames from "classnames";

interface Props {}

interface State {
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

class Main extends React.Component<Props & WithStyles<ClassNames>, State> {
  constructor(props: Props & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      item: 0,
      open: true
    };
    this.changePage = this.changePage.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  public title(location: string) {
    const prefix = "asataken / ";
    if (location === "/sounds") {
      return prefix + "Sounds";
    } else if (location === "/works") {
      return prefix + "Works";
    } else if (location === "/about") {
      return prefix + "About";
    } else {
      return prefix + "Top";
    }
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
      <BrowserRouter>
        <div style={{ marginTop: "5em", marginBottom: "5em" }}>
          <MuiThemeProvider theme={theme}>
            <Hidden mdUp={true}>
              <div className={classes.content}>
                <Router changePage={this.changePage} />
              </div>
              <TopBar title={this.title} />
              <BottomMenu item={this.state.item} changePage={this.changePage} />
            </Hidden>
            <Hidden smDown={true}>
              <div
                className={classNames(classes.body, {
                  [classes.contentOpen]: this.state.open,
                  [classes.contentClose]: !this.state.open
                })}
              >
                <div className={classes.content}>
                  <Router changePage={this.changePage} />
                </div>
              </div>
              <SideMenu
                item={this.state.item}
                open={this.state.open}
                title={this.title}
                changePage={this.changePage}
                handleDrawer={this.handleDrawer}
              />
            </Hidden>
          </MuiThemeProvider>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles<{} & ClassNames>(styles, { withTheme: true })(Main);
