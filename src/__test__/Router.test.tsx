import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Router from "../Router";
import Top from "../pages/Top";
import Sounds from "../pages/Sounds";
import Works from "../pages/Works";
import About from "../pages/About";

configure({ adapter: new Adapter() });

it("Top exists in routing", () => {
  const changePage = jest.fn();
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Router changePage={changePage} />
    </MemoryRouter>
  );
  expect(wrapper.find(Top)).toHaveLength(1);
});

it("Sounds exists in routing", () => {
  const changePage = jest.fn();
  const wrapper = mount(
    <MemoryRouter initialEntries={["/sounds"]}>
      <Router changePage={changePage} />
    </MemoryRouter>
  );
  expect(wrapper.find(Sounds)).toHaveLength(1);
});

it("Sounds exists in routing", () => {
  const changePage = jest.fn();
  const wrapper = mount(
    <MemoryRouter initialEntries={["/works"]}>
      <Router changePage={changePage} />
    </MemoryRouter>
  );
  expect(wrapper.find(Works)).toHaveLength(1);
});

it("Sounds exists in routing", () => {
  const changePage = jest.fn();
  const wrapper = mount(
    <MemoryRouter initialEntries={["/about"]}>
      <Router changePage={changePage} />
    </MemoryRouter>
  );
  expect(wrapper.find(About)).toHaveLength(1);
});
