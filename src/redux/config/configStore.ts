import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";

const store = configureStore({
  reducer: { modal },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
