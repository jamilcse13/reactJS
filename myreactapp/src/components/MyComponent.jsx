import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const tick = () => {
    console.log("clock ticking");
    setDate(new Date());
  };

  useEffect(() => {
    console.log("count");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("starting timer");
    const interval = setInterval(tick, 1000);

    // do the cleanup - stop the timer
    return () => {
      console.log("component unmounted");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
