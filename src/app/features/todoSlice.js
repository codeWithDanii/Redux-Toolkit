import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        complete: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload.id
          ? (todo.complete = action.payload.complete)
          : todo.complete
      );
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
