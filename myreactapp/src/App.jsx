import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div>
      {/* Another way */}
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <Counter
        render={(count, incrementCount) => (
          <HoverCounter  count={count} incrementCount={incrementCount}/>
        )} 
      /> */}

      <Counter>
        {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      
      
      <Counter>
        {(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>

    </div>
  );
}

export default App;
