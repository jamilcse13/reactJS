import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";

const states = []; // [0: [value, setter], 1: [value, setter]]
let stateIndex = -1;

// The useState() function
function useState(defaultValue) {
  const index = ++stateIndex;

  if (states[index]) return states[index];

  const setValue = (newValue) => {
    states[index][0] = newValue;

    renderNewValue();
  };

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

function App() {
  const [todo, setTodo] = useState("");
  const [warning, setUpdatedWarning] = useState(null);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const updatedWarning = inputValue.includes(".js")
      ? "You need javascript skill to complete the task. Do you have it?"
      : null;

    setTodo(inputValue);
    setUpdatedWarning(updatedWarning);
  };

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>

      <h2>{warning || "Good Choice"}</h2>
    </div>
  );
}

function renderNewValue() {
  stateIndex = -1;
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}

renderNewValue();
