import * as React from "react";
import { Paper, Typography } from "@material-ui/core";

class Sounds extends React.Component {
  public render() {
    return (
      <div>
        <Paper>
          <Typography variant="overline" component="p">
            準備中
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Sounds;
