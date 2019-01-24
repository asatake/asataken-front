import * as React from "react";
import * as ReactDOM from "react-dom";
import SiteInfo from "../components/SiteInfo";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
