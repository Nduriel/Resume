import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./HomeComponent";
import WorkExperience from './WorkExperience';
import PersonalInfo from './PersonalInfo';
import FooterComponent from "./common/FooterComponent";
import NavbarComponent from "./common/NavbarComponent";

function MainComponent() {
  const HomePage = () => {
    return <Home />;
  };

  const Resume = () => {
    return <WorkExperience />;
  };

  const Biography = () => {
    return <PersonalInfo />;
  };

  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/WorkExperience" component={Resume} />
        <Route exact path="/PersonalInfo" component={Biography} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
