import Clock from "./components/Clock";
import './App.css'

function App() {
  console.log('App component rendered')
  return <Clock locale="bn-BD" >Bangladesh</Clock>;
}

export default App;
