/**
 * @format
 */

import React from "react";
import App from "../App";

import { shallow } from "enzyme";

const createTestProps = (props: object) => ({
  ...props
});

describe("App", () => {
  const props = createTestProps({});
  const wrapper = shallow<App>(<App {...props} />);

  describe("rendering", () => {
    it("should render a <ReservationApp/>", () => {
      expect(wrapper.find("ReservationApp")).toHaveLength(1);
    });
  });
});
// Add 'export' to fake this being a module to silence TSLint.

// it("renders correctly", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
