import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import { shallow } from "enzyme";
// import { shallowToJSON } from "enzyme-to-json";

// https://github.com/vjwilson/enzyme-example-jest

import App from "./App";

describe("App", () => {
	test("should render correctly", () => {
		expect(shallow(<App />)).toMatchSnapshot();
	});
});
