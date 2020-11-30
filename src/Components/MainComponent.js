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
        <Route exact path="/" component={HomePage} />
        <Route path="/WorkExperience" component={Resume} />
        <Route path="/PersonalInfo" component={Biography} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
