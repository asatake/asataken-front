import * as React from "react";
import { Card, List, ListItem, ListItemText } from "@material-ui/core";
import { Mail } from "@material-ui/icons";
import MdiIcon from "@mdi/react";
import { mdiTwitter } from "@mdi/js";

class RequestWorks extends React.Component {
  public render() {
    return (
      <div>
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
              target="_blank"
              rel="norefferer"
            >
              <MdiIcon path={mdiTwitter} size="1.5em" color="#1da1f2" />
              <ListItemText secondary="TwitterのDMでも可能です。(@Mush_asatake)" />
            </ListItem>
          </List>
        </Card>
      </div>
    );
  }
}

export default RequestWorks;
