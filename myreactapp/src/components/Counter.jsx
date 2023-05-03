import { Component } from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
      };
    
    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    // Another way
    // render() {
    //     const {render} = this.props;
    //     const {count} = this.state;

    //     return render(count, this.incrementCount);
    // }

    render() {
        const {children} = this.props;
        const {count} = this.state;

        return children(count, this.incrementCount);
    }
}
