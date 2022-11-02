import { itunesApiService } from "@app/utils/apiUtils";
import { convertObjectToCamelCase } from "@utils";

export interface TrackItem {
  country: string;
  primaryGenreName: string;
  collectionName: string;
  trackName: string;
  artistName: string;
  imageUrl: string;
  artworkUrl100: string;
  previewUrl: string;
  wrapperType: string;
  duration: number;
  trackTimeMillis: number;
  trackId: number;
  kind: string;
}

export type TrackResponse = {
  resultCount: number;
  results: TrackItem[];
};

type Params = {
  searchTerm: string;
  offset: number;
  limit: number;
};

export const itunesApi = itunesApiService.injectEndpoints({
  endpoints: builder => ({
    fetchTracks: builder.query<TrackResponse, object>({
      query: (params: Params) =>
        `search?term=${params.searchTerm}&offset=${params.offset}&limit=${params.limit}`,
      transformResponse: (response: TrackResponse) => {
        return convertObjectToCamelCase<TrackResponse>(response);
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchTracksQuery } = itunesApi;
