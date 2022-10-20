import { render } from "@utils/testUtils";
import SearchBox from "../index";

describe("<SearchBox />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<SearchBox />);

    expect(baseElement).toMatchSnapshot();
  });

  it("should render one search component", () => {
    const { getByTestId } = render(<SearchBox />);
    expect(getByTestId("search-box")).toBeInTheDocument();
  });
});
