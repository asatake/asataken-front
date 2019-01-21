import * as React from "react";
import {
  Card,
  Tabs,
  Tab,
  List,
  ListItem,
  Divider,
  ListItemText,
  withStyles
} from "@material-ui/core";
import {
  Person,
  Cake,
  Warning,
  SentimentSatisfiedAlt
} from "@material-ui/icons";
import MdiIcon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";
import { deepOrange } from "@material-ui/core/colors";

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

  public about() {
    return (
      <Card>
        <List>
          <ListItem>
            <ListItemText primary="このサイトはBGM素材・効果音素材などの音の素材を配布しているサイト、管理人が個人で運営しています。" />            
          </ListItem>
          <ListItem>
            <ListItemText primary="音楽によって作品の幅を広げたいクリエイターの方を応援しています。" />
          </ListItem>
          <ListItem>
          <ListItemText primary="また、単に素材としてだけでなく、「聴いて」楽しめる音楽づくりを目指しています。" />
          </ListItem>
        </List>
      </Card>
    );
  }

  public profile() {
    return (
      <Card>
        <List>
          <ListItem>
            <Person color="secondary" />
            <ListItemText primary="浅井 茸人" secondary="Taketo Asai" />
          </ListItem>
          <Divider />
          <ListItem>
            <Cake />
            <ListItemText secondary="1994/02/11" />
          </ListItem>
          <Divider />
          <ListItem
            button={true}
            component="a"
            href="https://twitter.com/Mush_asatake"
            target="blank"
          >
            <MdiIcon path={mdiTwitter} size="1.5em" color="#1da1f2" />
            <ListItemText secondary="@Mush_asatake" />
          </ListItem>
        </List>
      </Card>
    );
  }

  public agreement() {
    const rows: Array<{ text: string; icon: JSX.Element }> = [
      {
        text:
          "当サイト内の作品は、販売中のものを除きフリー素材としてご利用いただいて構いませんが、著作権はすべて管理人に帰属します。",
        icon: <Warning />
      },
      {
        text:
          "利用報告は任意です。ただし、ご報告を頂いた際は宣伝等がしやすくなりますので、ぜひお気軽にご連絡ください。",
        icon: <SentimentSatisfiedAlt />
      },
      {
        text: "楽曲の第三者への再配布、転売などはしないでください。",
        icon: <Warning />
      },
      {
        text:
          "当サイト内の作品の使用により損害・損失が発生しましても、当方は一切の責任を負いません。ご了承ください。",
        icon: <Warning />
      }
    ];

    return (
      <List component="ul">
        {rows.map((item, index) => (
          <ListItem component="li">
            {item.icon}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    );
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
        {this.state.tabItem === 0 && <Card>{this.about()}</Card>}
        {this.state.tabItem === 1 && <Card>{this.profile()}</Card>}
        {this.state.tabItem === 2 && <Card>{this.agreement()}</Card>}
      </div>
    );
  }
}

export default withStyles(styles)(About);
