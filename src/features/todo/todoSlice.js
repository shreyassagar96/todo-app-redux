import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalState = { todos: [{ id: 1, text: "Hello" }] };

export const todoSlice = createSlice({
  name: "todo",
  initialState: initalState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
