import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const MAX = 18;
  const MIN = 0;

  const updateCounter = (value) => {
    setCounter((prev) => {
      let next = prev + value;
      if (next > MAX || next < MIN) return prev;
      console.log(`Prev ${prev}, Next ${next}`);
      return next;
    });
  };

  return (
    <div>
      <p>Counter = {counter}</p>
      <button
       className='bg-gray-700 rounded-md px-1 py-1'
       disabled={counter >= 18} onClick={() => updateCounter(1)}>
        +1
      </button>
      <button
       className='bg-gray-700 rounded-md px-1 py-1'
       disabled={counter >= 17} onClick={() => updateCounter(2)}>
        +2
      </button>
      <button 
      className='bg-gray-700 rounded-md px-1 py-1'
      disabled={counter <= 0} onClick={() => updateCounter(-1)}>
        -1
      </button>
      <button 
      className='bg-gray-700 rounded-md px-1 py-1'
      disabled={counter <= 1} onClick={() => updateCounter(-2)}>
        -2
      </button>
    </div>
  );
};

export default CounterApp;
