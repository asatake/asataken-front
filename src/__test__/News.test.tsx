import * as React from "react";
import * as ReactDOM from "react-dom";
import News from "../components/News";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<News />, div);
  ReactDOM.unmountComponentAtNode(div);
});
