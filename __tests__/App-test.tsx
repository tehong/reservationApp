/**
 * @format
 */

import React from "react";
import App from "../App";
import renderer from "react-test-renderer";

import { shallow } from "enzyme";

// const createTestProps = (props: object) => ({
//   ...props
// });

// describe("App", () => {
//   const props = createTestProps({});
//   const wrapper = shallow<App>(<App {...props} />);

//   describe("rendering", () => {
//     it("should render a <ReservationApp/>", () => {
//       expect(wrapper.find("ReservationApp")).toHaveLength(1);
//     });
//   });
// });
// Add 'export' to fake this being a module to silence TSLint.

// FIXME - unable to pass jest due to invalid import token.
//   putting in transformIgnorePatterns still didn't help.
//   see https://github.com/react-navigation/react-navigation/issues/3348
//
it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
