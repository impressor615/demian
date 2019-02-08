import "@/assets/styles/main.scss";
import React from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Hello from "@/components/Hello";
import configureStore from "@/configureStore";

const Store = configureStore();
class App extends React.PureComponent {
  public render() {
    return (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/hello" component={Hello} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
