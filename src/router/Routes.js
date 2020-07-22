import React from "react";

// ROUTER
import { BrowserRouter, Route, Switch } from "react-router-dom";

// CONTEXT
import PageManagerContext from "../context/pageManager-context";


// COMPONENTS
import Header from "../components/Header/Header";
import Registro from "../components/Registro/Registro";
import Cultivo from "../components/Cultivo/Cultivo";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";


const Routes = () => {
    return (
      <PageManagerContext.Consumer>
        {(context) => (
          <BrowserRouter basename="/public/webdesign/lineadetiempo">
          
            <Header />
            <Switch>
              
            </Switch>
            <Footer />
          </BrowserRouter>
        )}
      </PageManagerContext.Consumer>
    );
  };
  
  export default Routes;