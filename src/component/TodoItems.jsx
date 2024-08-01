import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../app/features/todoSlice";

function TodoItems() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="p-3 w-full min-w-72 ">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-4 bg-slate-900 rounded-lg p-4"
          >
            <div className="flex items-center gap-5 ">
              <input
                type="checkbox"
                onChange={(e) => {
                  dispatch(
                    toggleTodo({ id: todo.id, complete: e.target.checked })
                  );
                }}
              />
              <p
                className={`${todo.complete ? "line-through opacity-50" : ""}`}
              >
                {todo.text}
              </p>
            </div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoItems;
