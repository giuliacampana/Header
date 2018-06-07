// const Enzyme = require("enzyme");
// const EnzymeAdapter = require("enzyme-adapter-react-15");

// // Setup enzyme's react adapter
// Enzyme.configure({ adapter: new EnzymeAdapter() });
import React from "react";
import { shallow } from "enzyme";
import { shallowToJSON } from "enzyme-to-json";

import App from "../../client/dist/bundle.js";

describe("App", () => {
	test("should render correctly", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
});
