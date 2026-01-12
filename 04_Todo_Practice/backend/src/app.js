// writing main server file
import express from "express"
import cors from "cors"
import { TodoRouter } from "./todo/todoRoute.js";

const app = express();

// Applying middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
     origin:"http://localhost:5173",
     Credential:true
}))

app.use("/api/v1/todo",TodoRouter)
export default app;

// for creating todo -:  http://localhost:9090/api/v1/todo/createTodo
// for fetching all todos -:  http://localhost:9090/api/v1/todo/getTodos
// for fetching single todo by id -:  http://localhost:9090/api/v1/todo/getTodo/todoid
// for updating todo by id -:  http://localhost:9090/api/v1/todo/updateTodo/todoid
// for deleting todo by id -:  http://localhost:9090/api/v1/todo/deleteTodo/todoid