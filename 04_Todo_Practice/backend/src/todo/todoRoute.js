import express from "express"
import { createTodo, getTodo, getTodos, updateTodo } from "./todoController.js";

const router = express.Router();

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodos);
router.get('/getTodo/:id',getTodo);
router.put("/updateTodo/:id",updateTodo)

export const TodoRouter = router;