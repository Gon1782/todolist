import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      id: 1,
      title: "이거해야함",
      desc: "이거는 이렇고 저거는 저렇고",
      isDone: false,
    },
    {
      id: 2,
      title: "저거해야함",
      desc: "저거는 저렇고 이거는 이렇고",
      isDone: true,
    },
  ],
  number: 3,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push(action.payload);
    },
    deleteList: (state, action) => {
      const newLists = state.lists.filter((list) => list.id !== action.payload);
      state.lists = newLists;
    },
    changeList: (state, action) => {
      const newLists = state.lists.map((list) => {
        if (list.id === action.payload) {
          return { ...list, isDone: !list.isDone };
        } else {
          return { ...list };
        }
      });
      state.lists = newLists;
    },
    plusNumbers: (state, action) => {
      state.number += action.payload;
    },
  },
});

export const { addList, plusNumbers, deleteList, changeList } = todosSlice.actions;
export default todosSlice.reducer;
