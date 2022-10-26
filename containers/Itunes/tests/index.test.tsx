import { render } from "@app/utils/testUtils";
import TracksContainer from "../index";

describe("<TracksContainer />", () => {
  const tracksContainerProps = { recommendations: [] };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<TracksContainer {...tracksContainerProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
