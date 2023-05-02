import "./App.css";

// without hoc
// import ClickCounter from "./components/hoc/norrmal-process/ClickCounter";
// import HoverCounter from "./components/hoc/norrmal-process/HoverCounter";
// with hoc
import ClickCounter from "./components/hoc/hoc-process/ClickCounter";
import HoverCounter from "./components/hoc/hoc-process/HoverCounter";


function App() {
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
    </div>
  );
}

export default App;
