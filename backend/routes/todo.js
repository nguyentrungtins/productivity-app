const express = require("express");
const router = express.Router();
const {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.route("/").get(getTodo).post(setTodo);

router.route("/:id").delete(deleteTodo).put(updateTodo);

module.exports = router;
