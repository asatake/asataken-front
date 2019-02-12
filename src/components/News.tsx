import * as React from "react";
import { Card, Table, TableBody, TableRow, TableCell } from "@material-ui/core";

interface Props {}

const News: React.FC<Props> = () => {
  const rows = [
    { date: "2019/02/09", body: "サイトを開設し、Worksを更新しました。" }
  ];
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
};

export default News;
