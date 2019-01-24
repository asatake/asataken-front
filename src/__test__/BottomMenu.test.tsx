import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import BottomMenu from "../pages/BottomMenu";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const changePage = jest.fn();
  shallow(<BottomMenu item={0} changePage={changePage} />);
});
