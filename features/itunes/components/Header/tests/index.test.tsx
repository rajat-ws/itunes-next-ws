import { render } from "@utils/testUtils";
import Header from "../index";

describe("<Header />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
