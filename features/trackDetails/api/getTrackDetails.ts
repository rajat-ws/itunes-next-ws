import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

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

export type TrackDetail = {
  resultCount: number;
  results: TrackItem[];
};

export const trackDetailsApi = createApi({
  reducerPath: "trackDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_ITUNES_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    fetchTrackDetails: builder.query<TrackDetail, number>({
      query: trackId => `lookup?id=${trackId}`,
    }),
  }),
});

export const { useFetchTrackDetailsQuery } = trackDetailsApi;
