import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Top from "../pages/Top";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const changePage = jest.fn();
  shallow(<Top changePage={changePage} />);
});
