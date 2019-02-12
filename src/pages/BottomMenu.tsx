import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import { Home, MusicNote, Work, Info } from "@material-ui/icons";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {
  item: number;
  changePage: (event: any, item: number) => void;
}

interface State {}

const styles = {
  root: {
    width: "100%"
  }
};

class BottomMenu extends React.Component<Props, State> {
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
    return (
      <BottomNavigation
        value={this.props.item}
        onChange={(e, v) => this.handleHistory(e, v)}
        showLabels={true}
        style={{
          width: "100%",
          bottom: 0,
          position: "fixed",
          marginBottom: 0,
          paddingBottom: 0,
          border: "2 solid black"
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Sounds" icon={<MusicNote />} />
        <BottomNavigationAction label="Works" icon={<Work />} />
        <BottomNavigationAction label="About" icon={<Info />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(withRouter(BottomMenu));
