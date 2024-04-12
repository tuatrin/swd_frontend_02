import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import personSlice from "../features/personSlice";

export const store = configureStore({
  reducer: {
    person: personSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
