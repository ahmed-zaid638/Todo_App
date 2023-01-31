import React, { useState } from "react";
import { useDispatch} from "react-redux/es/exports";
import { addTodo } from "../Redux/TodoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
  setValue("")
  };
  return (
    <div className="addtodo">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddTodo;
