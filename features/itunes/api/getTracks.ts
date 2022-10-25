import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

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

export const itunesApi = createApi({
  reducerPath: "itunesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_ITUNES_URL,
    prepareHeaders: headers => {
      headers.get("Access-Control-Allow-Origin");
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    fetchTracks: builder.query<TrackResponse, string>({
      query: name => `search?term=${name}`,
    }),
  }),
});

export const { useFetchTracksQuery } = itunesApi;
