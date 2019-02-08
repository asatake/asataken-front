import * as React from "react";
import { Card, Typography, CardContent, Button } from "@material-ui/core";

class Discography extends React.Component {
  public render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography component="h2" variant="h6">
              銀河アリス イメージソング「FROM GINGA」
            </Typography>
            <Typography variant="body2" color="textSecondary">
              2019/02/02
            </Typography>
            <Typography>
              Vtuber の 銀河アリス さんのイメージソングを製作しました。
            </Typography>
            <Typography variant="body1">
              <Button
                variant="outlined"
                href="https://www.youtube.com/watch?v=QQuHMF7U1cY"
                rel="norefferer"
                target="_blank"
                style={{ color: "red" }}
              >
                YouTube
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Discography;
