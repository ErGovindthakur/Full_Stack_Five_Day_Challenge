import React, { useEffect, useState } from "react";
import { getTodos } from "./api.js";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => {
    try {
      const { data } = await getTodos;
      setTodos(data.todos);
      console.log(data.todos);
    } catch (error) {
      console.log("Error while fetching Todos -> ", error.message);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);
  console.log(`Todos -> ${todos}`);

  return !todos ? (
    <h3>Todo is Loading...</h3>
  ) : (
    <div className="w-full h-screen bg-zinc-900 text-white flex gap-5 ">
      {/* Apple */}
      {todos.map((data) => {
        return (
          <div key={data._id}>
            <div className="w-[360px] h-[160px] pt-2 pb-5 px-2 m-2 bg-gray-700 ">
              <p>Title -: {data?.title}</p>
              <p>Description -: {data?.description}</p>
              <div className="py-2 flex gap-x-3">
                <button className="bg-green-600 rounded-md px-3 py-2 cursor-pointer">
                  Update
                </button>
                <button className="bg-red-600 rounded-md px-3 py-2 cursor-pointer">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
