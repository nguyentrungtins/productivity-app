const asyncHandler = require("express-async-handler");
// @desc    Get Todo List
// @route   Get api/todo
// @access  Private
const getTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Todo List" });
});

// @desc    Set Todo List
// @route   POST api/todo
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error("It seems like you haven't entered any text");
  }
  res.status(200).json({ message: "Set Todo List" });
});

// @desc    Update Todo List
// @route   PUT api/todo/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Todo List" });
});

// @desc    Delete Todo List
// @route   DELETE api/todo/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete Todo List" });
});

module.exports = {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo,
};
