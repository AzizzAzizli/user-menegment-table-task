import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    isActive: false,
    activeIndex:null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
      setActiveModal: (state, action) => {
          
          state.isActive = true;
          if (typeof action.payload !== "undefined") {
            state.activeIndex = action.payload;
        }
    },
    setCloseModal: (state ) => {
        state.isActive = false;
  },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveModal,setCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
