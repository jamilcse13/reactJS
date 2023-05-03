import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import ThemeContext from "./contexts/ThemeContext";

export default class App extends React.Component {
  state = {
    theme: "dark",
  };

  render() {
    const { theme } = this.state;

    return (
      <div>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>

        <ThemeContext.Provider value={{ theme: theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
