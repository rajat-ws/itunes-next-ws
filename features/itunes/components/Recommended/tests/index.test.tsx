/**
 *
 * Tests for Recommended
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import Recommended from "../index";

describe("<Recommended />", () => {
  const props = {
    recommendations: [
      {
        trackId: 12345,
        trackName: "Baarishein",
      },
    ],
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<Recommended {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 Recommended component", () => {
    const { getAllByTestId } = render(<Recommended {...props} />);
    expect(getAllByTestId("recommended").length).toBe(1);
  });
});
