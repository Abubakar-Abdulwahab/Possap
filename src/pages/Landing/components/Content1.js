import React, { useState } from "react";
import RequestImg from "../../../assets/images/request.jpg";
import WaitImg from "../../../assets/images/wait.jpg";
import PoliceImg from "../../../assets/images/police.jpg";

export const HowSection = () => {
  const [imgUrl, setImgUrl] = useState(RequestImg);
  const handleImgChange = (img) => {
    setImgUrl(img);
  };
  return (
    <section id="how">
      <div className="container">
        <div className="row">
          <div className="how__content">
            <h2 className="how__title">How does it work</h2>
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="shadow-sm  mb-5 bg-white rounded">
                  <img src={imgUrl} className="img-fluid" alt="" id="img" />
                </div>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <div className="container">
                  <div className="accordion" id="accordionExample">
                    <h2 className="mb-0">
                      <a
                        className="request_service new-collapse-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        id="request"
                        onClick={() => handleImgChange(RequestImg)}
                      >
                        <div
                          className="toggle-img mt-2 first-toggle"
                          id="1"
                        ></div>
                        Request Service
                      </a>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      toggle_img_id="main1"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <p className="how__body">
                        Click on the “Request Service” or “Get Started” button
                        to access a page to request a service. You might be
                        required to create an account if you do not already have
                        one.
                      </p>

                      <a href="#" role="button" className="btn  benefits__btn">
                        Get Started
                      </a>
                    </div>

                    <h2 className="mb-0 mt-3">
                      <a
                        className="wait_for new-collapse-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        id="wait"
                        onClick={() => handleImgChange(WaitImg)}
                      >
                        <div
                          className="toggle-img mt-2 second-toggle"
                          id="2"
                        ></div>
                        Wait For Approval
                      </a>
                    </h2>

                    <div
                      id="collapseTwo"
                      toggle_img_id="main2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <p className="how__body">
                        Upon applying for a service, your request will be
                        reviewed by the appropriate authorities based on the
                        approval guideline.
                      </p>
                      <a href="#" role="button" className="btn  benefits__btn">
                        Get Started
                      </a>
                    </div>

                    <h2 className="mb-0 mt-3">
                      <a
                        className="receive new-collapse-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        id="receive"
                        onClick={() => handleImgChange(PoliceImg)}
                      >
                        <div
                          className="toggle-img mt-2 third-toggle"
                          id="3"
                        ></div>
                        Receive Your Service
                      </a>
                    </h2>

                    <div
                      id="collapseThree"
                      toggle_img_id="main3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <p className="how__body">
                        Congrats! Your request has been approved; you are to
                        kindly follow the laid down instructions to receive your
                        request.
                      </p>
                      <a href="#" role="button" className="btn  benefits__btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
