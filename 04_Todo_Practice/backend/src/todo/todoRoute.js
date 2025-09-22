import express from "express"
import { createTodo, getTodo } from "./todoController.js";

const router = express.Router();

router.post('/createTodo',createTodo);
router.get('/getTodos',getTodo);

export const TodoRouter = router;