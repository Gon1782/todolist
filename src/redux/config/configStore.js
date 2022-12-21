import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";
import todos from "../modules/todoSlice";

const store = configureStore({
  reducer: { modal, todos },
});

export default store;
