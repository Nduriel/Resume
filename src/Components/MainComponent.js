import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./common/Footer";
import Home from "./HomeComponent";

function MainComponent() {
  const HomePage = () => {
   return <Home />;
  };
  return (
    <>
      <div>
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default MainComponent;
