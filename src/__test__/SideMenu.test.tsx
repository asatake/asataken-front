import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import SideMenu from "../pages/SideMenu";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const title = jest.fn();
  const changePage = jest.fn();
  const handleDrawer = jest.fn();
  shallow(
    <SideMenu
      item={0}
      open={false}
      title={title}
      changePage={changePage}
      handleDrawer={handleDrawer}
    />
  );
});
