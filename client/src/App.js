import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Save from "./pages/Save";
import Search from "./pages/Search";
import "./App.css";
import axios from "axios";
import './style.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     allSavedBooks: []
  //   }
  // }

  // function that handles the update of allSavedbooks
  // updateSavedBooks(newBook) {
  //   this.setState({
  //     allSavedBooks: [...allSavedBooks, newBook]
  //   })
  // }

  // componentDidMount() {
  //   axios.get("/api/books")
  //   .then((books) => {
  //     console.log(books.data)
  //       this.setState({
  //         allSavedBooks: books.data
  //       })
  //   })
  // }


  render() {
    return (
      <Router>
        <div>
          <Header className = "header"/>
          <Route exact path="/" component={Search} />
          <Route exact path="/save" component={Save} />
        </div>
      </Router>

    );
  }
}


export default App;
