## Setup

- traditional Vite app
  - removed boilerplate
  - provided some assets (css, data)
    - just so we can focus on important stuff
  - removed <StrictMode>, so it's less logs

## Advanced Topics

- /tutorial directory
- work in the starter folder
- complete code in the final folder
- in order to work on topic import component from 'starter'
- in order to test final import component from 'final'
- setup challenges
- in the beginning examples with numbers and buttons :):):)

```js
import Starter from './tutorial/1-useState/starter/1-error-example';
import Final from './tutorial/1-useState/final/1-error-example';
function App() {
  return (
    <div className="container">
      <Starter />
      <Final />
    </div>
  );
}

export default App;
```

#### The Need For State

```js
import Starter from './tutorial/01-useState/starter/01-error-example.jsx';
```

- in App.jsx setup import and container div

  Setup Challenge :

- create count variable
- display value in the JSX
- add button and increase the value
- the reason for bug - we don't trigger re-render (reference next lecture)

```js
const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    // preserve value between renders
    // trigger re-render
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
```

#### useState Basics

```js
import Starter from './tutorial/01-useState/starter/02-useState-basics.jsx';
```

[Javascript Nuggets - Destructuring (Array)](https://www.youtube.com/watch?v=qhECs40xMec&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=7&t=9s)

- useState hook
- returns an array with two elements: the current state value, and a function that we can use to update the state
- accepts default value as an argument
- state update triggers re-render

```js
import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
```

#### Initial Render and Re-Renders

In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.

#### General Rules of Hooks

- starts with "use" (both -react and custom hooks)
- component must be uppercase
- invoke inside function/component body
- don't call hooks conditionally (cover later)
- set functions don't update state immediately (cover later)

#### useState with Array

```js
import Starter from './tutorial/01-useState/starter/03-useState-array.jsx';
```

Setup Challenge :

- import data
- setup a state value
  - people - default value equal to data
- display list(people) in the browser

- create two functions

  - one that removes single item from the list
  - one that clears entire list

1. render the list

```js
import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
```

2. remove items

[Javascript Nuggets - Filter and Find](https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=4)

```js
import React from 'react';
import { data } from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
```

- should we update backroads app project?
