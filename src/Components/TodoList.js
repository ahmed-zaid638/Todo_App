import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
