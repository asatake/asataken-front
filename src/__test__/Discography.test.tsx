import * as React from "react";
import * as ReactDOM from "react-dom";
import Discography from "../components/Discography";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Discography />, div);
  ReactDOM.unmountComponentAtNode(div);
});
