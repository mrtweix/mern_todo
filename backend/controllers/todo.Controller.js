import Todo from "../models/Todo.model.js";
import ErrorResponse from "../middlewares/errorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const getTodos = asyncHandler(async (req, res, next) => {
  const todos = await Todo.find({});
  if (!todos) {
    return next(new ErrorResponse("No todos found.", 400));
  }
  res.status(200).send({
    success: true,
    data: todos,
  });
});

const getTodo = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse("Please provide id of specific todo", 401));
  }
  const todo = await Todo.findById(id);
  res.status(200).send({
    success: true,
    data: todo,
  });
  if (!todo) {
    return next(new ErrorResponse(`Todo of ${id} not found.`, 404));
  }
});

const createTodo = asyncHandler(async (req, res, next) => {
  const { title, description, status } = req.body;
  const todo = { title, description, status };

  if (!title || !description) {
    return next(new ErrorResponse(`Please add all the fields.`, 404));
  }

  const newTodo = new Todo(todo);
  await newTodo.save();
  const todos = await Todo.find({});

  res.status(200).send({
    success: true,
    data: todos,
  });
  if (!newTodo) {
    return next(new ErrorResponse(`Todo creation failed.`, 500));
  }
});

const editTodo = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse("Please provide id of specific todo", 401));
  }

  const todo = await Todo.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return next(new ErrorResponse("Error updating todo", 401));
  }

  const todos = await Todo.find({});
  res.status(200).send({
    success: true,
    data: todos,
  });
});

const deleteTodo = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new ErrorResponse("Please provide id of specific todo", 401));
  }
  const todo = await Todo.findById(id);
  if (!todo) {
    return next(new ErrorResponse("Error deleting todo", 500));
  } else {
    await todo.remove();
    const todos = await Todo.find({});
    res.status(200).send({
      success: true,
      data: todos,
    });
  }
});

export { getTodos, getTodo, createTodo, editTodo, deleteTodo };
