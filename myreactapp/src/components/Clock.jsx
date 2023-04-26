import React from "react";

class Clock extends React.Component {
  // we don't need to write contructor(props) because we don't use props inside this
  // we can not write this here
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
     this.setState({
        date: new Date(),   // this.state.date = new Date() - Never Do That
      });
  }

  render() {
    const { date } = this.state;
    const { locale, children } = this.props;
    return (
      <h1 className="heading">
        <span className="text">
          Hello - {children} {date.toLocaleTimeString(locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;