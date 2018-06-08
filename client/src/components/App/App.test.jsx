import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import React from "react";
import { shallow, mount, render } from "enzyme";
import sinon from "sinon";

import App from "./App";
import Icons from "../Icons";

describe("<App />", () => {
	test("should render correctly", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});

	test("should render one <Icons /> component", () => {
		const wrapper = shallow(<App />);
		console.log("length", wrapper.find(Icons).length);
		expect(wrapper.find(Icons).length).toBe(1);
	});
});
