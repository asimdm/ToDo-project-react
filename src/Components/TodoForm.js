import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="addToTodo">
      <form onSubmit={handleSubmit}>
        <input
          className="inputField"
          type="textarea"
          value={text}
          placeholder="Add To Todo"
          onChange={(e) => setText(e.target.value)}
        />
        <br></br>
        <button type="submit" className="submitButton">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
