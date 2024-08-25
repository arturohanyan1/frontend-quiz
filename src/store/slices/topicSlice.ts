import { createSlice } from "@reduxjs/toolkit";

export interface ITopicState {
  topic: string | null;
}

const initialState: ITopicState = {
  topic: null,
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    resetTopic: (state) => {
      state.topic = null;
    },
  },
});

export const { setTopic, resetTopic } = topicSlice.actions;

export default topicSlice.reducer;
