import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    alert(`count: ${count}`);
  }, [count]); // runs every time count updates

  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowUp") setCount(prevCount => prevCount + 1); // need be a function since if only runs on mount count always 0
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown); // remove listener on un mount
  }, []); // only adds listener on mount

  return (
    <div className="content">
      <h1>Count: {count}</h1>
      <div className="button-container">
        <button
          onClick={() => setCount(count + 1)}
          className="button"
          type="button"
        >
          Plus
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
