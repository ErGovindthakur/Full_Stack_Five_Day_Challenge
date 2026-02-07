import { useState } from "react";
import Counter from "./components/counter/CounterTrack";
import CounterControls from "./components/counter/CounterControls";
import Header from "./components/Header";
import UserCard from "./components/userCard/UserCard";

const App = () => {
  const [count, setCount] = useState(0);

  const sendMsg = (msg) => {
    console.log(msg);
  };

  return (
    <div className="app-container">
      <Header task="Task 1" />
      <Counter count={count} />
      <CounterControls count={count} setCount={setCount} />

      <Header task="Task 2" />
      <div className="card-wrapper">
        <UserCard name="Govind Thakur" role="Developer" isOnline={true} />
        <UserCard name="Ajay" role="Tester" isOnline={false} />
      </div>

      <Header task="Task 3" />
      <UserCard
        name="Vijay"
        role="Tester Automation"
        isOnline={false}
        sendMsg={sendMsg}
      />
    </div>
  );
};

export default App;
