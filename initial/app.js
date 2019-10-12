import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="content">
      <h1>Count: 0</h1>
      <div className="button-container">
        <button className="button" type="button">
          Plus
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
