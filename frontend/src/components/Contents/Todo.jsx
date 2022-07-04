import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
import AddTodo from "./AddTodo";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getTodos, reset } from "../../features/todo/todoSlice";

let isInitial = true;
const Todo = () => {
  const { user } = useSelector((state) => state.auth);
  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todo
  );
  console.log(todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (isInitial) {
      if (!user) {
        return navigate("/login");
      }
      isInitial = false;
    }

    dispatch(getTodos());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);
  return (
    <div className={classes.todo}>
      <h1>Todo List</h1>
      <div className={classes.todo__wrapper}>
        {todos.length > 0 ? (
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo._id} todos={todo} />
            ))}
          </div>
        ) : (
          <h3>You have not set any todo</h3>
        )}
        <AddTodo />
      </div>
    </div>
  );
};

export default Todo;
