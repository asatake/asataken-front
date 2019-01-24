import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Works from "../pages/Works";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Works />);
});
