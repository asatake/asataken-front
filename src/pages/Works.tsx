import * as React from "react";
import {
  Typography,
  Tabs,
  Tab,
  Card,
  FormControl,
  InputLabel,
  Select,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { Mail } from '@material-ui/icons';
import MdiIcon from "@mdi/react";
import { mdiTwitter } from '@mdi/js';

interface IWorksProps {}

interface IWorksState {
  tabItem: number;
  selected: number;
}

class Works extends React.Component<IWorksProps, IWorksState> {
  constructor(props: IWorksProps) {
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

  public request() {
    return (
      <Card>
        <List component="ul">
          <ListItem component="li">
            <ListItemText primary="音楽制作のご依頼がございましたら、下記の方法でご連絡ください。" />
          </ListItem>
          <ListItem component="li">
            <Mail />
            <ListItemText primary="mgn.mush.music#gmail.com (#->@)" />
          </ListItem>
          <ListItem
            button={true}
            component="a"
            href="https://twitter.com/Mush_asatake"
            target="blank"
          >
            <MdiIcon path={mdiTwitter} size="1.5em" color="#1da1f2" />
            <ListItemText secondary="TwitterのDMでも可能です。(@Mush_asatake)" />
          </ListItem>
        </List>
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
