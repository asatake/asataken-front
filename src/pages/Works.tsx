import * as React from "react";
import { Tabs, Tab, Card } from "@material-ui/core";
import RequestWorks from "../components/RequestWorks";
import Discography from "../components/Discography";

interface Props {}

interface State {
  tabItem: number;
  selected: number;
}

class Works extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tabItem: 0,
      selected: 0
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
          <Tab label="ご依頼に関して" />
          <Tab label="今までの活動" />
        </Tabs>
        {this.state.tabItem === 0 && (
          <Card>
            <RequestWorks />
          </Card>
        )}
        {this.state.tabItem === 1 && (
          <Card>
            <Discography />
          </Card>
        )}
      </div>
    );
  }
}

export default Works;
