import enzyme from "enzyme";
import React from "react";

import { Hello } from "@/components/Hello";

describe("Hello Component", () => {
  it("renders the correct text", () => {
    const wrapper = enzyme.shallow(<Hello compiler="TypeScript" framework="React" />);
    expect(wrapper.find("h1").text()).toEqual("Hello from TypeScript and React!");
  });

  it("should be matched with snapshot", () => {
    const wrapper = enzyme.shallow(<Hello compiler="TypeScript" framework="React" />);
    expect(wrapper).toMatchSnapshot();
  });
});
