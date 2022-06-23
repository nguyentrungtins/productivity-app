const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModels");

// @desc    Get Todo List
// @route   Get api/todo
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json(todos);
});

// @desc    Set Todo List
// @route   POST api/todo
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("It seems like you haven't entered any text");
  }
  const todo = await Todo.create({
    text: req.body.text,
  });
  res.status(200).json(todo);
});

// @desc    Update Todo List
// @route   PUT api/todo/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Task not found!");
  }
  const updatedTodo = await Todo.findOneAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
});

// @desc    Delete Todo List
// @route   DELETE api/todo/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Task not found!");
  }
  await todo.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo,
};
