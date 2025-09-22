import express from "express"
import { createTodo } from "./todoController.js";

const router = express.Router();

router.post('/createTodo',createTodo);

export const TodoRouter = router;