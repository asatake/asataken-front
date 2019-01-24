import * as React from "react";
import * as ReactDOM from "react-dom";
import Agreement from "../components/Agreement";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Agreement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
