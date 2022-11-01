import React from "react";
import TracksList from "../index";
import { fireEvent, render, timeout } from "@app/utils/testUtils";
import TrackCard from "../../TrackCard";

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

  const trackCardProps = {
    data: {
      artistName: "Adele",
      trackName: "Hello",
      trackId: 1544494392,
      trackTimeMillis: 295502,
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/5a/47/6d/5a476ddd-4690-1297-1896-6a286a497a21/191404113974.png/100x100bb.jpg",
      previewUrl: "22233223",
      collectionName: "collecition",
      country: "India",
      primaryGenreName: "abc",
      kind: "Kind",
      wrapperType: "Rap",
    },
    isShowDetailsButton: false,
    isShowDetails: true,
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<TracksList {...trackListDataProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should check if Track Card exists in TrackList", () => {
    const handlePlayPauseWrapperSpy = jest.fn();
    const { getByTestId } = render(
      <TrackCard {...trackCardProps} handlePlayPauseWrapper={handlePlayPauseWrapperSpy} />
    );
    expect(getByTestId("track-card")).toBeInTheDocument();
  });

  it("should render the Pause text when Play button is clicked", async () => {
    const handlePlayPauseSpy = jest.fn();
    trackListDataProps.loading = false;
    const { getByTestId } = render(
      <TracksList {...trackListDataProps} handlePlayPauseWrapper={handlePlayPauseSpy} />
    );
    const button = getByTestId("playPauseBtn");

    expect(button).toHaveTextContent(/play/i);
    fireEvent.click(button, { onclick: handlePlayPauseSpy() });
    await timeout(500);
    expect(button).toHaveTextContent(/pause/i);
  });
});
