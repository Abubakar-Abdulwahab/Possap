import React from "react";
import IntroCards from "../components/dashboard/intro-card";
import Sample from "../Sample";

const MainDashboard = () => {
  return (
    <>
      <div class="col-md-12">
        <h4>Hi, Welcome back</h4>
      </div>
      <IntroCards />
      <Sample />
    </>
  );
};

export default MainDashboard;
