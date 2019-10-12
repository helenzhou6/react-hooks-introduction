# React Hooks Introduction Talk

---

## New Feature: Hooks
-  Part of React
-  Introduced in March 2019
-  In version 16.8.6
-  Backward compatible
    -  Can use classes with hooks (no breaking changes)
    -  opt-in - not need to

---

## A hook...
...is a special function that lets you 'hook into' React features.

---

## No more Classes
- Lets you use state and other React features without writing a class
- Instead it is functional components
- Easier to understand / cleaner code
    - Helps separate logic 

---

## State
- `const [nameOfState, updateFuncName] = React.useState(defaultVal)`
- `updateFunName()`
    - Either pass in new state value or function where first argument is older state: (prevStateVal) => prevStateVal + 1

---

## Effects
- useEffect() combines the component life cycles
    - it combines: componentdDidMount / unmuont / didUpdate etc.
    - By default: runs every time the component updates / renders.
- `React.useEffect(() => whattorun, [depenencies])`
    - Empty array: only onmount
    - Return a function: on unmount

---

## Code along
- Go to this site: https://codesandbox.io/s/youthful-dhawan-yv7ow
    - FORK the side (blue button on top right)

---

## Documentation: 
- Overview: https://reactjs.org/docs/hooks-overview.html
- In detail: https://reactjs.org/docs/state-and-lifecycle.html

---

## Solution
https://codesandbox.io/s/sweet-hawking-gp1td

---