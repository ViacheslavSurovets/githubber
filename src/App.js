import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GitHubberState from "./context/git/gitState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

function App() {

  return (
    <GitHubberState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container"></div>
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            )}/>
          </Switch>
        </div>
      </Router>
      </AlertState>
    </GitHubberState>
  );
}

export default App;
