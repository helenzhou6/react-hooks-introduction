# Code Along Introduction to React Hooks

This is an introduction to [React Hooks](https://reactjs.org/docs/hooks-intro.html), using Code Along.

It is based on students having already worked with React but using `Classes` instead. If learning React from scratch, I would recommend going through the materials listed [here](https://github.com/foundersandcoders/react-week) (React Week as part of the Founders and Coders bootcamp course).

## Instructions

1. First give a brief talk introducing React Hooks - [slides here](https://hackmd.io/@uYhtwaTkQeyelbBdX4OTeA/BJjdqGJFH#/). You can [edit the content](https://hackmd.io/oTHhYW1-SG6Bk7vNOAlldw?edit). Or [in this repo](./introductionTalk.md)

2. Either get the students to:
  - Fork [this codesandbox](https://codesandbox.io/s/youthful-dhawan-yv7ow) - by pressing 'Fork' the blue button on the top right
  - Or they can use `./initial` within this repo:
    - `git clone https://github.com/helenzhou6/react-hooks-introduction.git`
    - `cd react-hooks-introduction`
    - `cd initial`
    - `npm i`
    - `npm start`
    - Follow the localhost link. It will hotreload automatically.

3. Code along relating to `state`:
  - Explain what want to achieve (button press - will update the count)
  - Note no longer using `Classes`. Explain how before would use `this.state = {}` etc to set the state.
  - Now can use the state hook - `React.useState`.
    - `const countHook = React.useState()` to declare the state.
    - To set a default value - pass it into the hook `const countHook = React.useState(0)` (default is `0`)
    - To get access to the the count: `const count = countHook[0]` - hook returns an array and the first item is the state.
    - To update the state, instead of `this.setState()`, it is the second item in the array returned from the React `useState` hook. `const setCount = countHook[1]`
    - To condense, can use deconstruction - `const [count, setCount] = React.useState(0)`
    - Explain how can use `React.useState()` multiple times - so can split into multiple little bits of `state` rather than a large object.
    - Now can access `count` - `<h1>Count: {count}</h1>`
    - And update it: `<button  onClick={() => setCount(count + 1)}...`

4. Lifecycles
  - Change your thinking! The React hook `React.useEffect()` emcompasses most of the life cycle methods previously used (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)
  - To declare the hook: `React.useEffect()`.
  - Takes as a first argument the code that will run ```React.useEffect(() => {alert(`count: ${count}`)});```. (Comment out the `alert` or else it may get annoying later on)
  - By default, will run on mount and every time the component updates. If you only want the effect to run on mount, second argument is an empty array. If you only want it to run when the `count` changes, previously:

    ```
    componentDidUpdate(_, prevState) {
      if (prevState.count !== this.props.count) {
        // alert(`count: ${count}`)
      }
    }
    ```

    - But now the `useEffect` hook second argument take an array of dependencies - so will run the effect whenever one of the depency changes. Note - it will only run on mount AND when one of the dependency changes.

    ```
    React.useEffect(() => {
      // alert(`count: ${count}`);
    }, [count]); // runs every time count updates
    ```

    - To run code when the component unmounts, previously `componentWillUnmount`, you return a function, but we'll get to that later.

5. Lifecycles continued
  - Now say want to add an `eventListener` where when the user presses the `ArrowUp` key, will update the `count`
  - Add another `React.useEffect()`. Note: can have multiple effect hooks.
  - This time only want to add the event listener on mount - so `React.useEffect(() => {}, [])` (the empty array)
  - Add the code want to run on mount:

  ```
  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowUp") setCount(count + 1); 
    };
    window.addEventListener("keydown", handleKeyDown);
  }, []);
  ```
  - NOTE!! It only update the `count` to a max of `1`. This is because since the hook only runs on mount, the `count` will be `0`, and thus when the `handleKeyDown()` function runs it will always set the `count` to `1`. It does not have the most up to date `count`.
  - To fix - `setCount` can take a function, in order to access the most up to date `count`. Change to `setCount(prevCount => prevCount + 1)`
  - Now we want to remove the event listener when the component unmounts. To do this - you can return a function. In this case:

  ```
    React.useEffect(() => {
      ...
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  ```

6. Wrap up
  - Find the solution with notes [on this codesandbox](https://codesandbox.io/s/ancient-glade-o546g) or in this repo `./solution` folder.
  - Bonus: on your own add another button that deals with minusing the count (and an event listener for `ArrowDown` key events.)

7. Other things to note to note
- Can compose your own hooks - hooks within hooks 🤯. Name as `use...` so that React will know it is a custom hook.
  - A great one to use is [`useWhyDidYouUpdate`](https://usehooks.com/useWhyDidYouUpdate/) whilst you code to let you know why the component updates.