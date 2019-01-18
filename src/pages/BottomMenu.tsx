import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import { Home, MusicNote, Work, Info } from "@material-ui/icons";

interface IBottomMenuProps {
  item: number;
  changePage: (event: any, item: number) => void;
}

interface IBottomMenuState {
  value: number;
}

const styles = {
  root: {
    width: "100%"
  }
};

class BottomMenu extends React.Component<IBottomMenuProps, IBottomMenuState> {
  constructor(props: IBottomMenuProps) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: any, value: number) {
    this.props.changePage(event, value);
  }

  public render() {
    return (
      <BottomNavigation
        value={this.props.item}
        onChange={this.handleChange}
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

export default withStyles(styles)(BottomMenu);
