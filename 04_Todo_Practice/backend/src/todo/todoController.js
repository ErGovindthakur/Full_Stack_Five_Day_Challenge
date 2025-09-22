// Writing a crud for todo

import { PraGoTodoModel } from "./todoModel.js";

// 1. Create Todo endpoint
export const createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    // 1. field validation
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    // 2. todo creation
    const todoData = await PraGoTodoModel.create({
      title,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Todo created Successfully...",
      todoData,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to create todo -: ${err.message}`,
    });
  }
};

// 2. GetTodos endpoint

export const getTodos = async (req, res) => {
  try {
    const todos = await PraGoTodoModel.find();

    if (todos.length < 1) {
      return res.status(404).json({
        success: false,
        message: "Todo not available...",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Here is your todos...",
      todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to get todo -: ${err.message}`,
    });
  }
};

// 3. GetTodo by id endpoint

export const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await PraGoTodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found by id...",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Here is your todo...",
      todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to get todo by id -: ${err.message}`,
    });
  }
};

// 4. updateTodo endpoint

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
     console.log(title,description);
    let updateTodoOjb = {};
    if (title !== undefined) updateTodoOjb.title = title;
    if (description !== undefined) updateTodoOjb.description = description;

    console.log(updateTodoOjb);
    const updatedTodo = await PraGoTodoModel.findByIdAndUpdate(id, updateTodoOjb);

    if (!updateTodo) {
      return res.status(401).json({
        success: false,
        message: "Failed to update todo",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo Updated successfully...",
      updatedTodo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `Failed to update todo -: ${err.message}`,
    });
  }
};
