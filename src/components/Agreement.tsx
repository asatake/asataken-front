import * as React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Warning, Mood, Public, Forum } from "@material-ui/icons";

const rows = [
  {
    text:
      "当サイト内の作品は、販売中のものを除きフリー素材としてご利用いただいて構いませんが、著作権はすべて管理人に帰属します。",
    icon: <Public color="inherit" />
  },
  {
    text:
      "フリー素材の商用利用の場合、メールもしくはTwitterのDMにてご連絡いただいて初めて無料でご利用いただけます。",
    icon: <Forum />
  },
  {
    text:
      "非商用の場合、利用報告は任意です。ただし、ご報告を頂いた際は宣伝等がしやすくなりますので、ぜひお気軽にご連絡ください。",
    icon: <Mood />
  },
  {
    text: "楽曲の第三者への再配布、転売などはしないでください。",
    icon: <Warning color="error" />
  },
  {
    text:
      "当サイト内の作品の使用により損害・損失が発生しましても、当方は一切の責任を負いません。ご了承ください。",
    icon: <Warning color="error" />
  }
];

const Agreement: React.FC = () => {
  return (
    <div>
      <List component="ul">
        {rows.map((row, index) => (
          <ListItem key={row.text} component="li">
            {row.icon}
            <ListItemText primary={row.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Agreement;
