import { render } from "@app/utils/testUtils";
import ErrorState from "../index";

describe("<ErrorState />", () => {
  const errorStateProps = {
    intl: {},
    tracksData: undefined,
    tracksError: "error",
    loading: false,
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<ErrorState {...errorStateProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 ErrorState component", () => {
    const { getByTestId } = render(<ErrorState {...errorStateProps} />);
    expect(getByTestId("error-state")).toBeInTheDocument();
  });
});
