import React from "react";
import question2 from "../../../assets/images/questionTwo.svg";
import question1 from "../../../assets/images/questionOne.svg";

export const HelpSection = () => {
  return (
    <section id="help">
      <div className="container">
        <div className="row">
          <div className="help__content">
            <h2 className="help__title ">Need help with getting started?</h2>
            <div className="row">
              <div className="col-md-4">
                <img src={question2} alt="question one" />
              </div>
              <div className="col-md-4">
                <p>
                  We understand that you might have questions about the process
                  of making a request and possible complaints. Feel free to
                  reach out to us
                </p>
              </div>
              <div className="col-md-4">
                <img src={question1} alt="question two" />
              </div>
            </div>
            <div className="benefits__btn_container">
              <a href="#" role="button" className="btn  benefits__btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
