import React, { useState } from "react";

const DeepDiveIntoJSX = () => {
  const [counter, setCounter] = useState(0);

  let name = "Govind Thakur";
  let isLoggedIn = true;

  let updateCounter = (value) => {
    setCounter((prev) => {
      let next = prev + value;
      return next >= 18 ? 18 : next <= 0 ? 0 : next;
    });
  };
  return (
    <div className=" w-full px-2 py-1 bg-gray-700">
      <p>Hello {name}</p>
      <p>{isLoggedIn ? "Welcome,once again" : "Please Login"}</p>

      <div className="bg-gray-800 text-white p-4 rounded-md">
        <h2>Counter App</h2>
        <p style={{ color: counter > 10 ? "red" : "green" }}>
          Current count -: {counter}
        </p>

        <button onClick={() => updateCounter(+1)}>Increase</button>
        <button onClick={() => updateCounter(-1)}>Decrease</button>
        {counter === 0 && <p>Counter is at min state</p>}
      </div>
    </div>
  );
};

export default DeepDiveIntoJSX;
