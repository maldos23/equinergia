import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Index from "./pages/index";
import Services from "./pages/services";
import About from "./pages/about";
import Sidebar from "./components/sidebar/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/servicios" exact component={Services} />
          <Route path="/about" exact component={About}/>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
