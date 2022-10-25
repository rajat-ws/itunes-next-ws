import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackItem } from "@app/features/itunes/api/getTracks";

export interface SongState {
  tracks: TrackItem[];
  error?: string;
  tracksCount: number;
}

export const initialState: SongState = {
  tracksCount: 0,
  error: undefined,
  tracks: [],
};

export const itunesSlice = createSlice({
  name: "itunesApi",
  initialState,
  reducers: {
    successGetTracks: (state: SongState, action: PayloadAction<TrackItem[]>) => {
      state.tracks = action.payload;
      state.tracksCount = action.payload.length;
    },
  },
});

export const { successGetTracks } = itunesSlice.actions;

export default itunesSlice.reducer;
