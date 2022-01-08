import React from "react";
import paymentCard from "../../../assets/images/paymentCards.svg";
import laptopMobile from "../../../assets/images/laptopMobile.svg";
import cardTimer from "../../../assets/images/cardTimer.svg";

export const BenefitsSection = () => {
  return (
    <section id="benefits">
      <div className="container">
        <div className="row">
          <div className="benefits__content">
            <h2 className="benefits__title ">
              Take advantage of all the benefits
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="benefits__body">
                  <img src={paymentCard} alt="" />
                  <h2>Multiple Payment Channels</h2>
                  <p>
                    Payments can be made against an invoice at any bank branch,
                    mobile banking, POS or online with debit cards (MasterCard,
                    Visa, Verve)
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benefits__body">
                  <img src={laptopMobile} alt="" />
                  <h2>Convenience and Ease</h2>
                  <p>
                    Request and pay for police specialized services online at
                    your convenience. You can now access police specialized
                    services from the comfort of your home, office or on the go.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="benefits__body">
                  <img src={cardTimer} alt="" />
                  <h2>Payment Transaction Records</h2>
                  <p>View your request and payment history in one place.</p>
                </div>
              </div>
            </div>
            <div className="benefits__btn_container">
              <a href="#" role="button" className="btn  benefits__btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
