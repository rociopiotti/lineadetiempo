import React from "react";

// ROUTER
import { BrowserRouter, Route, Switch } from "react-router-dom";

// CONTEXT
import PageManagerContext from "../context/pageManager-context";

// COMPONENTS
import Header from "../components/Header/Header";

import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";

const Routes = () => {
  return (
    <PageManagerContext.Consumer>
      {(context) => (
        <BrowserRouter basename='/'>
          <Header />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
            <Route />
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </PageManagerContext.Consumer>
  );
};

export default Routes;
