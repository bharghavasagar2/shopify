import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MensPage from "./MensPage";
import WomensPage from "./WomensPage";
import PhonesPages from "./PhonesPages";
import Header from "./Header";
import Cart from "./Cart";
import Signin from "./Signin";
import MensShow from "./MensShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/mens" exact component={MensPage} />
        <Route path="/womens" exact component={WomensPage} />
        <Route path="/phones" exact component={PhonesPages} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/mens/:id" exact component={MensShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
