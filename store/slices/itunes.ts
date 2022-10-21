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
    successGetSongs: (state: SongState, action: PayloadAction<TrackItem[]>) => {
      state.tracks = action.payload;
      state.tracksCount = 0;
    },
  },
});

export const { successGetSongs } = itunesSlice.actions;

export default itunesSlice.reducer;
