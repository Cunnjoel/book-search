import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Save from "./pages/Save";
import Search from "./pages/Search";
import "./App.css";

class App extends Component {
  render() {
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
}


export default App;
