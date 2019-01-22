import * as React from "react";
import {
  Card,
  FormControl,
  InputLabel,
  Select,
  Typography
} from "@material-ui/core";

class Discography extends React.Component {
  public render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Discography;
