import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     { id: 1, text: "Wash kitchen floor", completed: false },
//     { id: 2, text: "Wash dishes.", completed: false },
//   ],
// };

const initialState = {
  todos: [],
};
const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearList: (state) => {
      state.todos = [];
    },
    removeToDo: (state, action) => {
      const toDoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== toDoId);
    },
    addToDo: (state, action) => {
      const newToDo = action.payload;
      state.todos = [...state.todos, newToDo];
    },
  },
});

export const { clearList, removeToDo, addToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
