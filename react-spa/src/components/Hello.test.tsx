import enzyme from "enzyme";
import React from "react";

import { PureHello as Hello } from "@/components/Hello";

describe("Hello Component", () => {
  const mockDispatch = jest.fn();
  it("renders the correct text", () => {
    const wrapper = enzyme.shallow(<Hello compiler="TypeScript" framework="React" dispatch={mockDispatch} />);
    expect(wrapper.find("h1").text()).toEqual("Hello from TypeScript and React!");
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Hello compiler="TypeScript" framework="React" dispatch={mockDispatch} />);
    expect(wrapper).toMatchSnapshot();
  });
});
