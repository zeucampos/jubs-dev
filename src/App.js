import logo from "./logo.svg";
import * as React from "react";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <a href="/">
          <div className="Logo">
            <div className="Logo-Slug">JJ</div>
            <span>JOBS JUBS</span>
          </div>
        </a>
      </div>
      <header className="App-header">
        <div className="Editor-Container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/>
        <Skills />
      </header>
    </div>
  );
};

export default App;
