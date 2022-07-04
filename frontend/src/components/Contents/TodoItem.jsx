import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem = ({ todos }) => {
  return (
    <div className={classes.todoItem__wrapper}>
      <input
        className={classes.input__itemTodo}
        type="checkbox"
        id={todos._id}
      />
      <label className={classes.label__todo} for={todos._id}>
        <span></span>
      </label>

      <h3>{todos.text}</h3>
    </div>
  );
};

export default TodoItem;
