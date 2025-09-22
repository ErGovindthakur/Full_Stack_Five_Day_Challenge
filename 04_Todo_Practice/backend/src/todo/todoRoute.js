import express from "express"
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "./todoController.js";

const router = express.Router();

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodos);
router.get('/getTodo/:id',getTodo);
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)

export const TodoRouter = router;