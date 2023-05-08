import { useState } from "react";
import "./App.css";
// import MyComponent from "./components/MyComponentClass";
import MyComponent from "./components/MyComponent";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div>{show && <MyComponent/>}</div>
      <p>
        <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'Hide Post' : 'Show Post'}
        </button>
      </p>
    </div>
  );
}

export default App;
