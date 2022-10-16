import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import NotFound from "./components/notFound";

// fix:
// add ? to explain common areas
// make sure focus goes on input clicked
// make image load from file instead of url
// customise colors
// swap with other fairshare

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />

            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
