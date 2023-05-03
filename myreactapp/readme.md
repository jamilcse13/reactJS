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
      <span className="text">Hello {new Date().toLocaleDateStrin()}</span>
      <img src="" />
      <p id="name">Jamil</p>
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

## Render prop:

- It is a prop that defines render logic
- It occurs from the App class
- In project code, ClickCounter and HoverCounter works as a presentation component and as a function. Counter class component manages the operation.
- We can use render prop in two ways.

  - First way:

    ```js
    // at App.jsx
    <Counter
        render={(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
        )}
    />

    // at Counter.jsx
     render() {
        const {render} = this.props;
        const {count} = this.state;

        return render(count, this.incrementCount);
    }
    ```

  - Second way:

    ```js
    // at App.jsx
    <Counter>
        {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
        )}
    </Counter>

    // at Counter.jsx
    render() {
        const {children} = this.props;
        const {count} = this.state;

        return children(count, this.incrementCount);
    }
    ```
