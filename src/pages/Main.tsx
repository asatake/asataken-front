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
// import classNames from "classnames";

interface IMenuProps {}

interface IMenuState {
  item: number;
}

type ClassNames = keyof typeof styles;

const drawerWidth = 180;
const drawerShiftWidth = 60;
const styles = {
  root: {
    width: "100%"
  },
  contentOpen: {
    width: drawerWidth
  },
  contentClose: {
    width: drawerShiftWidth
  }
};

class Main extends React.Component<
  IMenuProps & WithStyles<ClassNames>,
  IMenuState
> {
  constructor(props: IMenuProps & WithStyles<ClassNames>) {
    super(props);
    this.state = {
      item: 0
    };
    this.changePage = this.changePage.bind(this);
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
    if (item === 1) {
      return "Sounds";
    } else if (item === 2) {
      return "Works";
    } else if (item === 3) {
      return "About";
    } else {
      return "Top";
    }
  }

  public content() {
    return (
      <div style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}>
        <CssBaseline />
        {this.route(this.state.item)}
      </div>
    );
  }

  public changePage(event: any, item: number) {
    this.setState({ item });
  }

  public render() {
    // const classes = this.props.classes;
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
            <div>{this.content()}</div>
            <SideMenu
              item={this.state.item}
              title={this.title(this.state.item)}
              changePage={this.changePage}
            />
          </Hidden>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles<{} & ClassNames>(styles, { withTheme: true })(Main);
