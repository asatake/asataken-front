import * as React from "react";
import { Card, Tabs, Tab, withStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import SiteInfo from "../components/SiteInfo";
import Profile from "../components/Profile";
import Agreement from "../components/Agreement";

interface IAboutProps {}

interface IAboutState {
  tabItem: number;
}

const styles = {
  orangeAvatar: {
    backgroundColor: deepOrange[500]
  }
};

class About extends React.Component<IAboutProps, IAboutState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tabItem: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  public changeTab(event: any, tabItem: number) {
    this.setState({ tabItem });
  }

  public render() {
    return (
      <div>
        <Tabs
          value={this.state.tabItem}
          onChange={this.changeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="このサイトについて" />
          <Tab label="プロフィール" />
          <Tab label="利用規約" />
        </Tabs>
        {this.state.tabItem === 0 && (
          <Card>
            <SiteInfo />
          </Card>
        )}
        {this.state.tabItem === 1 && (
          <Card>
            <Profile />
          </Card>
        )}
        {this.state.tabItem === 2 && (
          <Card>
            <Agreement />
          </Card>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(About);
