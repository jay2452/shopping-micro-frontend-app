import React from "react";
import ReactDOM from "react-dom";

import Footer from "home/Footer";
import Header from "home/Header";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import SafeComponnet from "./SafeComponent";
import PDPContent from "./PDPContent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  // debugger;
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <SafeComponnet>
          <Header />
        </SafeComponnet>
        <div className="my-10">
          <Switch>
            <Route path={"/product/:id"} component={PDPContent} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
