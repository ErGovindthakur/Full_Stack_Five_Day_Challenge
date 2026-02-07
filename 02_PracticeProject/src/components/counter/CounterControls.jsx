const CounterControls = ({ count, setCount }) => {
  const MIN = 0;
  const MAX = 18;

  const updateCount = (value) => {
    setCount((prev) => {
      const next = prev + value;
      if (next > MAX) return MAX;
      if (next < MIN) return MIN;
      return next;
    });
  };

  return (
    <div>
      <button disabled={count >= MAX} onClick={() => updateCount(1)}>
        Increase By 1
      </button>
      <button disabled={count >= MAX - 1} onClick={() => updateCount(2)}>
        Increase By 2
      </button>
      <button disabled={count <= MIN} onClick={() => updateCount(-1)}>
        Decrease By 1
      </button>
      <button disabled={count <= MIN + 1} onClick={() => updateCount(-2)}>
        Decrease By 2
      </button>
    </div>
  );
};

export default CounterControls;
