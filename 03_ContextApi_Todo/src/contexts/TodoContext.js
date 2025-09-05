import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Msg",
      completed: false,
    },
  ],
  addTodo: () => {},
  // eslint-disable-next-line no-unused-vars
  updateTodo: (id, todo) => {},
  // eslint-disable-next-line no-unused-vars
  deleteTodo: (id) => {},
  // eslint-disable-next-line no-unused-vars
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
