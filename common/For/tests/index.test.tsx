/**
 *
 * Tests for For
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import For from "../index";

describe("<For />", () => {
  const props = {
    of: [{ name: "Something" }],
    noParent: false,
    ParentComponent: () => {
      return <div data-testid="for" />;
    },
    renderItem: (item, idx: number) => <div key={idx}>{item.name}</div>,
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<For {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 For component", () => {
    const { getAllByTestId } = render(<For {...props} />);
    expect(getAllByTestId("for").length).toBe(1);
  });

  it("should render the number of elements passed as props and should not add another layer of dom nesting", () => {
    const items = ["a", "b"];
    const { findByTestId, getAllByTestId } = render(
      <For
        of={items}
        noParent
        orientation="column"
        ParentComponent={props => <span {...props} data-testid="parent-span" />}
        renderItem={item => <div data-testid="child">{`item: ${item}`} </div>}
      />
    );

    expect(findByTestId("parent-span")).not.toBe(true);
    expect(getAllByTestId("child").length).toEqual(items.length);
  });

  it("should not render anything when items is not passed", () => {
    const { findByTestId } = render(
      <For {...props} renderItem={item => <div data-testid="child">{`item: ${item}`} </div>} />
    );

    expect(findByTestId("parent-span")).not.toBe(true);

    const rendered = render(
      <For {...props} renderItem={item => <div data-testid="child">{`item: ${item}`} </div>} />
    );

    expect(rendered.findByTestId("parent-span")).not.toBe(true);
  });
});
