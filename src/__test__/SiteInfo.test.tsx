import * as React from "react";
import * as ReactDOM from "react-dom";
import SiteInfo from "../components/SiteInfo";

describe("SiteInfo", () => {
  test("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SiteInfo />, div);
  });
});
