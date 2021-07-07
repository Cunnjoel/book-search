import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/save" component={Save} />
      </div>
    </Router>

  );
}


export default App;
