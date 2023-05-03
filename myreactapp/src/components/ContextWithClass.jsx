import ThemeContext from "../contexts/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import React from "react";

export default class Content extends React.Component {
    componentDidMount() {
        console.log(this.context)
    }

    render() {
        
        return (
            <div>
            <h1>This is a Content</h1>
            <Counter>
                {(count, incrementCount) => {
                return (
                    <ThemeContext.Consumer>
                    {({ theme, switchTheme }) => (
                        <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                        />
                    )}
                    </ThemeContext.Consumer>
                );
                }}
            </Counter>
            </div>
        );
    }
}

Content.contextType = ThemeContext;