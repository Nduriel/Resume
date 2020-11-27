import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./HomeComponent";
import FooterComponent from "./common/FooterComponent";
import NavbarComponent from "./common/NavbarComponent";

function MainComponent() {
  const HomePage = () => {
    return <Home />;
  };
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
