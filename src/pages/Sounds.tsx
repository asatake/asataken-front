import * as React from "react";
import { Paper, Typography } from "@material-ui/core";
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ISoundsProps extends RouteComponentProps<{}> {}

class Sounds extends React.Component<ISoundsProps, {}> {
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

export default withRouter(Sounds);
