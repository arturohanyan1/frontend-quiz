import { configureStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction } from "redux";
import soundReducer, { ISoundState } from "./slices/soundSlice";
import categoryReducer, { ICategoryState } from "./slices/categorySlice";
import topicReducer, { ITopicState } from "./slices/topicSlice";

export const store: ToolkitStore<
  {
    sound: ISoundState;
    category: ICategoryState;
    topic: ITopicState;
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        sound: ISoundState;
        category: ICategoryState;
        topic: ITopicState;
      },
      AnyAction
    >
  ]
> = configureStore({
  reducer: {
    sound: soundReducer,
    category: categoryReducer,
    topic: topicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
