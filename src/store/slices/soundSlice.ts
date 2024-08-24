import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface ISoundState {
  value: boolean;
}

const initialState: ISoundState = {
  value: true,
};

export const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    toggleSound: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleSound } = soundSlice.actions;

export const selectCount = (state: RootState): boolean => state.sound.value;

export default soundSlice.reducer;
