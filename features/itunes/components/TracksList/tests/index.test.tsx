import React from "react";
import TracksList from "../index";
import { render } from "@app/utils/testUtils";

describe("<TracksList />", () => {
  const trackListDataProps = {
    tracksData: {
      resultCount: 1,
      results: [
        {
          artistName: "Adele",
          collectionName: "collection",
          trackName: "Hello",
          trackId: 1544494392,
          artworkUrl100:
            "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/5a/47/6d/5a476ddd-4690-1297-1896-6a286a497a21/191404113974.png/100x100bb.jpg",
          previewUrl: "22233223",
        },
      ],
    },
    loading: true,
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<TracksList {...trackListDataProps} />);
    expect(baseElement).toMatchSnapshot();
  });
});
