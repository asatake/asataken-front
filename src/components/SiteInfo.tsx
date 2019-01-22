import * as React from "react";
import { Card, List, ListItem, ListItemText } from "@material-ui/core";

class SiteInfo extends React.Component {
  public render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default SiteInfo;
