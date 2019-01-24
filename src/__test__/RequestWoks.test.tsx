import * as React from "react";
import * as ReactDOM from "react-dom";
import RequestWorks from "../components/RequestWorks";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RequestWorks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
