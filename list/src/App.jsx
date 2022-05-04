import { useState } from "react";
import "./App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  window?.Garfish.channel.on("task", (data) => {
    setTasks([...tasks, data]);
  });

  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
