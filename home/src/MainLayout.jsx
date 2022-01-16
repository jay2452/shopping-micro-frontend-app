import React from "react";

import Footer from "home/Footer";
import Header from "home/Header";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import PDPContent from "pdp/PDPContent";
import CartContent from 'cart/CartContent';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContent from './HomeContent';


const MainLayout = () => {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
          <Header />
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path={"/product/:id"} component={PDPContent} />
            <Route path="/cart" component={CartContent} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
};


export default MainLayout;
