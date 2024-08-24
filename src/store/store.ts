import { configureStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction } from "redux";
import soundReducer, { ISoundState } from "./slices/soundSlice";

export const store: ToolkitStore<
  {
    sound: ISoundState;
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        sound: ISoundState;
      },
      AnyAction
    >
  ]
> = configureStore({
  reducer: {
    sound: soundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
