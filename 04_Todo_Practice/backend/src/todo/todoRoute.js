import express from "express"
import { createTodo, getTodo, getTodos } from "./todoController.js";

const router = express.Router();

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodos);
router.get('/getTodo/:id',getTodo);

export const TodoRouter = router;