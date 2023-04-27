import ClockList from "./components/ClockList";
import './App.css'

function App() {
  const quantities = [1,2,3];
  return <ClockList quantities={quantities} locale="bn-BD" >Bangladesh</ClockList>;
}

export default App;
