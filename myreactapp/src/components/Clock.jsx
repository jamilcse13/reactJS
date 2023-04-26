import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  // we don't need to write contructor(props) because we don't use props inside this
  state = { date: new Date(), locale: "bn-BD" };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };

  tick() {
    this.setState({
      date: new Date(), // this.state.date = new Date() - Never Do That
    });
  }

  render() {
    console.log('CLock component rendered')
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Hello - {this.props.children} {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <Button change={this.handleClick} locale={"en-US"}>
          Click Here
        </Button>
      </div>
    );
  }
}

export default Clock;
