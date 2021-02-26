import React from "react";
import Employees from "./components/Employees";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title />
        <Employees />
      </Wrapper>
    </div>
  );
}

export default App;
