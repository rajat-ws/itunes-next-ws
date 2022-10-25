import { render } from "@app/utils/testUtils";
import TrackCard from "../index";

describe("<TrackCard />", () => {
  const trackCardProps = {
    data: {
      trackId: 12345,
      artistName: "Anuv",
      collectionName: "Collection",
      trackName: "Baarishein",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/5a/47/6d/5a476ddd-4690-1297-1896-6a286a497a21/191404113974.png/100x100bb.jpg",
    },
  };

  it("should render and match the snapsho t", () => {
    const { baseElement } = render(<TrackCard {...trackCardProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
