import { fireEvent, render, timeout } from "@app/utils/testUtils";
import React from "react";
import TrackCard from "../index";

describe("<TrackCard />", () => {
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
  let handlePlayPauseWrapperSpy;
  beforeEach(() => {
    handlePlayPauseWrapperSpy = jest.fn();
  });

  it("should render and match the snapshot", () => {
    const { baseElement } = render(
      <TrackCard {...trackCardProps} handlePlayPauseWrapper={handlePlayPauseWrapperSpy} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("should render the Pause text when Play button is clicked", async () => {
    const handlePlayPauseSpy = jest.fn();

    const { getByRole } = render(
      <TrackCard {...trackCardProps} handlePlayPauseWrapper={handlePlayPauseSpy} />
    );
    const button = getByRole("button");

    expect(button).toHaveTextContent(/play/i);
    fireEvent.click(button, { onclick: handlePlayPauseSpy() });
    await timeout(500);
    expect(button).toHaveTextContent(/pause/i);
  });

  it("should check for Show Details button in track card component", () => {
    const { getByTestId } = render(<TrackCard {...trackCardProps} isShowDetailsButton={true} />);

    expect(getByTestId("showDetails")).toBeInTheDocument();
    fireEvent.click(getByTestId("showDetails"));
  });
});
