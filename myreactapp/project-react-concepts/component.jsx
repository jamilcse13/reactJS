import React from "react";
import ReactDOM from "react-dom";

// 1st way to declare a component
// received the param as object
function Clock(props) {
    return (
      <h1 className="heading">
        <span className="text">Hello {new Date().toLocaleDateStrin(props.locale)}</span>
      </h1>
    );
}


// pass param
ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));

// 2nd way to declare a component
class Clock {
  print() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello {new Date().toLocaleDateStrin(this.props.locale)}
        </span>
      </h1>
    );
  }
}

const ClockComponent = new Clock(); 
ReactDOM.render(<ClockComponent.print />, document.getElementById("root"));

/**
 * 3rd way
 * If we want to use the class like the functional way
 * when we pass any parameter, we will get it to props object.
 * In here react creates an object internally, which is props
 * This props is like Elements props
 */
class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello - {this.props.children} {new Date().toLocaleDateString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(<Clock locale="bn-BD" >Test</Clock>, document.getElementById("root"));
