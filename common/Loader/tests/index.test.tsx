import { render } from "@app/utils/testUtils";
import Loader from "../index";

describe("<Loader />", () => {
  it("should render and match the snapshot", () => {
    const { baseElement } = render(<Loader />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should render AlignCenter", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("align-center")).toBeInTheDocument();
  });
});
