import { createSlice } from "@reduxjs/toolkit";

export interface ICategoryState {
  category: string | null;
}

const initialState: ICategoryState = {
  category: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    resetCategory: (state) => {
      state.category = null;
    },
  },
});

export const { setCategory, resetCategory } = categorySlice.actions;

export default categorySlice.reducer;
