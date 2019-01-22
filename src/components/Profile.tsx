import * as React from "react";
import { Card, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Person, Cake } from '@material-ui/icons';
import MdiIcon from "@mdi/react";
import { mdiTwitter, mdiSoundcloud } from "@mdi/js";

class Profile extends React.Component {
  public render() {
    return (
      <div>
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
            <Divider />
            <ListItem
              button={true}
              component="a"
              href="https://soundcloud.com/mush_asatake"
              target="blank"
            >
              <MdiIcon path={mdiSoundcloud} size="1.5em" color="#ff3300" />
              <ListItemText secondary="mush_asatake" />
            </ListItem>
          </List>
        </Card>
      </div>
    );
  }
}

export default Profile;
