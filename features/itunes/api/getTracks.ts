import { itunesApiService } from "@app/utils/apiUtils";
import { convertObjectToCamelCase } from "@utils";

export interface TrackItem {
  collectionName: string;
  artistName: string;
  trackName: string;
  trackId: number;
  artworkUrl100: string;
}

export type TrackResponse = {
  resultCount: number;
  results: TrackItem[];
};

type Params = {
  searchTerm: string;
};

export const itunesApi = itunesApiService.injectEndpoints({
  endpoints: builder => ({
    fetchTracks: builder.query<TrackResponse, object>({
      query: (params: Params) => `search?term=${params.searchTerm}`,
      transformResponse: (response: TrackResponse) => {
        return convertObjectToCamelCase<TrackResponse>(response);
      },
    }),
  }),
  overrideExisting: true,
});

export const { useFetchTracksQuery } = itunesApi;
