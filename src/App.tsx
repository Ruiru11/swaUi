import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { setup } from "goober";
import PeoplePage from "./pages/People";
import PersonPage from "./pages/Person";

setup(React.createElement);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={PeoplePage} />
          <Route exact path="/:person_id" component={PersonPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
