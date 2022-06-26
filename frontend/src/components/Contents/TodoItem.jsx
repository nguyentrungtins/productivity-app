import React from "react";
import classes from "./TodoItem.module.css";
const TodoItem = () => {
  return (
    <div className={classes.todoItem__wrapper}>
      <input className={classes.input__itemTodo} type="checkbox" id="one" />
      <label className={classes.label__todo} for="one">
        <span></span>
      </label>
      <h3>Task 1</h3>
    </div>
  );
};

export default TodoItem;
