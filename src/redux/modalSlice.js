import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  activeIndex: null,
  formIsActive: false,
  newUserFormActive:false
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
    setCloseModal: (state) => {
      state.isActive = false;
    },
    setActiveForm: (state, action) => {
      state.formIsActive = true;
      if (typeof action.payload !== "undefined") {
        state.activeIndex = action.payload;
      }
    },
    
      setCloseFormModal: (state) => {
        state.formIsActive = false;
    },
    setActiveNewUserFormModal: (state, action) => {
      state.newUserFormActive = true;
    },
    
      setCloseNewUserFormModal: (state) => {
        state.newUserFormActive = false;
      },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveModal, setCloseModal ,setActiveForm,setCloseFormModal,setActiveNewUserFormModal,setCloseNewUserFormModal} = modalSlice.actions;

export default modalSlice.reducer;
