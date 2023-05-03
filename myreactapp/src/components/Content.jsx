import ThemeContext from "../contexts/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {({ theme }) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
}
