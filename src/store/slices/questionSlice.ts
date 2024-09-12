import { createSlice } from "@reduxjs/toolkit";

export interface IQuestionState {
  question: number | null;
}

const initialState: IQuestionState = {
  question: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    resetQuestion: (state) => {
      state.question = null;
    },
  },
});

export const { setQuestion, resetQuestion } = questionSlice.actions;

export default questionSlice.reducer;
