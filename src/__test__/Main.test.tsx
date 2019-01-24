import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Main from "../pages/Main";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Main />);
});
