import * as React from "react";
import { Card, Typography } from "@material-ui/core";
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ISoundsProps extends RouteComponentProps<{}> {}

class Sounds extends React.Component<ISoundsProps, {}> {
  public render() {
    return (
      <div>
        <Card>
          <Typography variant="h6" component="p">
            準備中です。更新をお待ちください。
          </Typography>
        </Card>
      </div>
    );
  }
}

export default withRouter(Sounds);
