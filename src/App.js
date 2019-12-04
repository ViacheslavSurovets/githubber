import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import GitHubberState from "./context/git/gitState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";

import "./App.css";

function App() {
  return (
    <ContactState>
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
                <Route component={NotFound} />
                )}/>
              </Switch>
            </div>
          </Router>
        </AlertState>
      </GitHubberState>
    </ContactState>
  );
}

export default App;
