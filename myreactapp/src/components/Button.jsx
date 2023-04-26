import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale} = nextProps;

        return currentChange !== nextChange && currentLocale !== nextLocale;
    }

  render() {
        const { change, locale } = this.props;
        return (
        <button onClick={() => change(locale)}>Click Here</button>
        );
    }
}


export default Button;