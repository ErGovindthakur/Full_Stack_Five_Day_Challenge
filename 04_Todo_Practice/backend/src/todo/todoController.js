// Writing a crud for todo

import { PraGoTodoModel } from "./todoModel.js";

export const createTodo = async(req,res)=>{
     const {title,description} = req.body;
     try {
          // 1. field validation
          if(!title || !description){
               return res.status(403).json({
                    success:false,
                    message:"All fields are required"
               })
          }
          // 2. todo creation
          const todoData = await PraGoTodoModel.create({
               title,
               description
          })

          return res.status(201).json({
               success:true,
               message:"Todo created Successfully...",
               todoData
          })
     } catch (err) {
          res.status(500).json({
               success:false,
               message:`Failed to create todo -: ${err.message}`
          })
     }
}