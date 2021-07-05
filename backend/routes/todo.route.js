import express from "express";
const router = express.Router();

import * as method from "../controllers/todo.Controller.js";

router.route("/").get(method.getTodos).post(method.createTodo);
router
  .route("/:id")
  .get(method.getTodo)
  .put(method.editTodo)
  .delete(method.deleteTodo);

export default router;
