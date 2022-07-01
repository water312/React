import React from "react";
import logo from "../logo.svg"

export default function Header(props) {
  return (
    <div className="App" tabIndex="0">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p class="aaa" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      </header>
    </div>
  );
}