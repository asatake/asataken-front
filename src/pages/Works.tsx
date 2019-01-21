import * as React from "react";
import { Typography, Tabs, Tab, Card, FormControl, InputLabel, Select } from "@material-ui/core";

interface IWorksProps {}

interface IWorksState {
  tabItem: number;
}

class Works extends React.Component<IWorksProps, IWorksState> {
  constructor(props: IWorksProps) {
    super(props);
    this.state = {
      tabItem: 0
    }
    this.changeTab = this.changeTab.bind(this);
  }

  public changeTab(event: any, tabItem: number) {
    this.setState({ tabItem });
  }

  public request() {
    return (
      <Card>
        aaa
      </Card>
    );
  }

  public discography() {
    return (
      <Card>
        <form autoComplete="off">
        <FormControl>
          <InputLabel>Year</InputLabel>
          <Select native={true}>
            <option>2019</option>
          </Select>
        </FormControl>
        </form>
        <Typography component="p" variant="h6">
          準備中です。更新をお待ちください。
        </Typography>
      </Card>
    );
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
        {this.state.tabItem === 0 && <Card>{this.request()}</Card>}
        {this.state.tabItem === 1 && <Card>{this.discography()}</Card>}
      </div>
    );
  }
}

export default Works;
