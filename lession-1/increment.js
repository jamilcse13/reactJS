const domContainer = document.querySelector('#root');

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="incButton" onClick={ () => setCounter(counter + 1) }>Increment +</button>
                <button id="resetButton" onClick={ () => setCounter(0) }>Reset</button>
                <button id="decButton" onClick={ () => setCounter(counter - 1) }>Decrement -</button>
            </div>
        </div>
    );
};

ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
    </div>,
    domContainer);