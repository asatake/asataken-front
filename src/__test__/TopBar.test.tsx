import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import TopBar from "../pages/TopBar";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const title = jest.fn();
  shallow(<TopBar title={title} />);
});
