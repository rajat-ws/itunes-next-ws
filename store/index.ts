import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { itunesApi } from "@features/itunes/api/getTracks";
import middlewares from "./middlewares";
import { trackDetailsApi } from "@app/features/trackDetails/api/getTrackDetails";

export const store = configureStore({
  reducer: {
    [itunesApi.reducerPath]: itunesApi.reducer,
    [trackDetailsApi.reducerPath]: trackDetailsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
