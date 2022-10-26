import reducer, { successGetTracks } from "../itunes";

test("should return an initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    tracksCount: 0,
    error: undefined,
    tracks: [],
  });
});

test("should display the song", () => {
  expect(
    reducer(
      undefined,
      successGetTracks([
        {
          trackId: 123323,
          artistName: "Anuv Jain",
          collectionName: "Baaarishein",
          trackName: "Barishein",
          artworkUrl100:
            "https://is4-ssl.mzstatic.com/image/thumb/Music/a0/74/81/mzi.ybszkvnq.tif/100x100bb.jpg",
        },
      ])
    )
  ).toEqual({
    tracksCount: 1,
    tracks: [
      {
        trackId: 123323,
        artistName: "Anuv Jain",
        collectionName: "Baaarishein",
        trackName: "Barishein",
        artworkUrl100:
          "https://is4-ssl.mzstatic.com/image/thumb/Music/a0/74/81/mzi.ybszkvnq.tif/100x100bb.jpg",
      },
    ],
    error: undefined,
  });
});
