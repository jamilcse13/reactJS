import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;

  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
