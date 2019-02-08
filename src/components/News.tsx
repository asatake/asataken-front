import * as React from "react";
import { Card, Table, TableBody, TableRow, TableCell } from "@material-ui/core";

interface INewsProps {}

interface INewsState {}

class News extends React.Component<INewsProps, INewsState> {
  public rows() {
    return [
      { date: "2019/02/09", body: "サイトを開設し、Worksを更新しました。" }
    ];
  }

  public render() {
    const rows = this.rows();
    return (
      <div>
        <Card>
          <Table>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.date}>
                  <TableCell scope="row">{row.date}</TableCell>
                  <TableCell>{row.body}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default News;
