import * as React from "react";
import { shallow } from "enzyme";
import { shallowToJSON } from "enzyme-to-json";

// https://github.com/vjwilson/enzyme-example-jest

import App from "./App";

describe("App", () => {
	test("should render correctly", () => {
		const wrapper = shallow(<App />);
		expect(shallowToJSON(wrapper)).toMatchSnapshot();
	});
});
