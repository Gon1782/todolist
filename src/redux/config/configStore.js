import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todolists from "../modules/todolist";
import modal from "../modules/modal";

const rootReducer = combineReducers({
  todolists: todolists,
  modal: modal,
});
const store = configureStore({ reducer: rootReducer });

export default store;
