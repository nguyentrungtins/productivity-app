import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo = () => {
  return (
    <div className={classes.todo}>
      <h1>Todo List</h1>
      <div className={classes.todo__wrapper}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todo;
