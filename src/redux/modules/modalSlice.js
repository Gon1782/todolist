import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  modalId: 0,
};

const modal = createSlice({
  name: "todos",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = true;
      state.modalId = action.payload;
    },
    hideModal: (state) => {
      state.show = false;
      state.modalId = 0;
    },
  },
});

export const { showModal, hideModal } = modal.actions;
export default modal.reducer;
