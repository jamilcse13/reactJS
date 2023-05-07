import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount((prevState) => prevState+1);
      i++;
    }
  };

  return (
    <div>
      {count}
      <p>
        <button type="button" onClick={() => setCount(count + 1)}>
          Counter
        </button>
      </p>

      <p>
        <button type="button" onClick={addFive}>
          Counter
        </button>
      </p>
    </div>
  );
}

export default Counter;
