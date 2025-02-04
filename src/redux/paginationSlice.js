import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPages: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    increment: (state, action) => {
          state.currentPage += 1;
    },
    decrement: (state, action) => {
        state.currentPage -= 1;
      },
      setTotalPages: (state,action) => {
          state.totalPages = action.payload;
      },
      setCurrentPage: (state, action) => {
          state.currentPage = action.payload;
      }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement,setTotalPages,setCurrentPage } = paginationSlice.actions;

export default paginationSlice.reducer;
