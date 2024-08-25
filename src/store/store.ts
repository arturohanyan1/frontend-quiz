import { configureStore, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AnyAction } from "redux";
import soundReducer, { ISoundState } from "./slices/soundSlice";
import categoryReducer, { ICategoryState } from "./slices/categorySlice";
import topicReducer, { ITopicState } from "./slices/topicSlice";
import questionReducer, { IQuestionState } from "./slices/questionSlice";

export const store: ToolkitStore<
  {
    sound: ISoundState;
    category: ICategoryState;
    topic: ITopicState;
    question: IQuestionState;
  },
  AnyAction,
  [
    ThunkMiddleware<
      {
        sound: ISoundState;
        category: ICategoryState;
        topic: ITopicState;
        question: IQuestionState;
      },
      AnyAction
    >
  ]
> = configureStore({
  reducer: {
    sound: soundReducer,
    category: categoryReducer,
    topic: topicReducer,
    question: questionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
