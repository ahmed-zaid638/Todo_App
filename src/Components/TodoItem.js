import React from "react";
import { todoDelete, toggleComplete } from "../Redux/TodoSlice";
import { useDispatch } from "react-redux";
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  // handleComplete
  const handleComplete = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };
  // handleDelete
  const handleDelete = () => {
    dispatch(
      todoDelete({
        id: id,
      })
    );
  };
  return (
    <li>
      <div className="item-check">
        <input
          type="checkbox"
          id={id}
          onClick={handleComplete}
          checked={completed}
        />
        <label>{title}</label>
      </div>
      <button type="button" onClick={handleDelete}>
        {" "}
        Delete{" "}
      </button>
    </li>
  );
};

export default TodoItem;
