// writing main server file
import express from "express"
import { TodoRouter } from "./todo/todoRoute.js";

const app = express();

// Applying middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/todo",TodoRouter)
export default app;

// for creating todo -:  http://localhost:9090/api/v1/todo/createTodo