import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: false },
    { id: 3, title: "todo 3", completed: false },
    { id: 4, title: "todo 4", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
     const index = state.findIndex((todo) => todo.id ===action.payload.id )
     state[index].completed = action.payload.completed;
      
    },
    todoDelete: (state, action) => {
        return state.filter((todo) => {
        return  todo.id !== action.payload.id ;
      }
      )
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleComplete, todoDelete } = todoSlice.actions;






