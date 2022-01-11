import React from "react";
import ApprovedReasonsImg from "../../../assets/images/approvedRequest.svg";

export const ReasonsSection = () => {
  return (
    <section id="reasons">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={ApprovedReasonsImg} className="reasons__img" />
          </div>
          <div className="col-md-6">
            <div className="reasons__content">
              <p className="reasons_title">Avoid the hassle</p>
              <h2 className="reasons__subtitle">
                Get Police Specialized Services with no hassle
              </h2>
              <p className="reasons__body">
                The POSSAP portal provides you the ability to request services
                such as Police Extract, FireArm License, Police Escort, Police
                Protection Services, CID Clearance Certificate, Tint Permit,
                from the comfort of your home.
              </p>
              <a href="#" className="reasons__get_started">
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
