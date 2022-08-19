import React from "react";
import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
      <div className="App">
        <header className="App-header">
        <Counter from="2022-08-06T20:37:00+02:00"></Counter>
        </header>
      </div>
  );
}

export default App;
