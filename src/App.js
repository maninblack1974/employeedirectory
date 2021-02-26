import React from "react";
import Employees from "./components/Employees/index";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";

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
