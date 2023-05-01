## Project
- First, check is there already any react app: create-react-app
- If it has, then remove it: yarn global remove create-react-app

- Create a react project with latest version: npx create-react-app myreact (directory)
**Note**: This process has been discarded by react. So we have to follow another way to to start a react project.

- We are using Vite as a tool to start a react project.
- Install Vite: npm create vite@latest
- Follow the procedures

### Element:
- The structure of an element:
    ```js
    const element = (
        <h1 className="heading" tableIndex={index}>
            <span className='text'>Hello {new Date().toLocaleDateStrin()}</span>
            <img src='' />
            <p id='name'>Jamil</p>
        </h1>
    );


    /*
    element = {
        type: 'h1',
        props: {
            classname: 'heading',
            tableIndex: 0,
            children: [
                {
                    type: 'span',
                    props: {
                        className: 'text'
                    }
                },
                {
                    type: 'img',
                    props: {
                        src: ''
                    }
                },
                {
                    type: 'p',
                    props: {
                        id: 'name',
                        children: Jamil
                    }
                }
            ]
        }
    }
    */
    ```

- We can not change react element

### Component:
- Component basically retursns a react element
- We can reuse a component multiple times
- We can pass attribute to component
- We should not change the values of props inside the Component


## State:
- State of a component is the data of the component which is chnaged.
- React reacts two time. 
    - When the props has changed 
    - When the state has changed
- **super()**: it calls the base class constructor
- **componentDidMount()**: it runs after component has been rendered to the DOM
- if we need state or props object value inside setState, then we should not call this.state, we should pass state and props inside a function. Then we can use the values. In this way we will get the correct value of state and props.
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});


// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

// Correct
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

- React works like a “top-down” or “unidirectional” data flow. 

## Event Handling:
- If we write a function like this- function(), it will call when the program load
- If we write a function like this- function, it will call when we hit the function
- We can prevent default operation in any event using preventDefault() function like this:
```js
function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');
}
```

## Forms:
- In react, we can controll the default DOM by ReactDOM
- If we pass value in react way, then we will allow react to handle it
- In we pass the value but not control it by the onChange method. then it will be read-only
- But if we pass the value={null}, then it won't be read-only. It will be changable.

## Lifting State Up:
- The structure tree of the coding approach:
```
                        Calculator(temp)
                            .
                          .   .
                        .       .
                      .            .
            TemperatureInput       BoilingVerdict
      (temp, scale, onTempChange)       (celcius)
```
- **Noted**:
    - There should be a single **source of truth** for any dtaa that changes in a React application
    - Rely on **Top-Down Data FLow** instead of syncing the state between different components
    - Lifting state involves writing more **boilerplate** code but takes less work to find bugs
    - We can implement any custom logic to **reject or transform user input**
    - If something can be **derived** from either props or state, it probably shouldn't be the state
    - Trace the bugs to their source easily by just moving to the top

## Composition vs Inheritance:
- Problems in Inheritance:
    - components are tightly coupled
    - from child, it's not clear what parents does
    - not clear about the parent child relation
    - future components will be tightly coupled which are extends parent class
    - nested extend - child that already extend other parent

- Composotion:
    - We use function rather than Class
    - We use props in lieu of extending a class
    - In here each fature component extends React.Component, but the binding component (like Text) will be a function

