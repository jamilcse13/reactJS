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
- 