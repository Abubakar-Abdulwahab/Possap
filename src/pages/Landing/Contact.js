import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Landing/navbar";
import Footer from "../Landing/footer";

const Contact = () => {
  return (
    <>
      <div>
        <NavBar />
        <section id="contact_us">
          <div className="contact__content">
            <h2>Contact Us</h2>
            <p>Get in touch for related enquiries and information </p>
          </div>
        </section>
        <section id="contact_us__form">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="contact_us__form_content">
                  <h2>Send Message</h2>
                  <p>Fill out the form, we will be in touch</p>
                  <form>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                      <div className="form-text">
                        Specify the subject of this message.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                      <div className="form-text">Enter your fullname.</div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Your Message
                      </label>
                      <textarea className="form-control"></textarea>
                      <div className="form-text">
                        What would you like help with.
                      </div>
                    </div>
                    <button type="submit" className="btn btn__submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact_us__card">
                  <h2>Contact Information</h2>
                  <div>
                    <div>
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      <span className="contact_us_subtitle">Address</span>{" "}
                    </div>
                    <p className="contact_us_info">
                      The Nigeria Police Force, Force headquarters, Louis Edet
                      House. Area 11, Garki, Abuja.
                    </p>
                  </div>
                  <div>
                    <div>
                      <i className="fas fa-envelope"></i>{" "}
                      <span className="contact_us_subtitle">Email</span>{" "}
                    </div>
                    <p className="contact_us_info">info@possap.gov.ng</p>
                  </div>
                  <div>
                    <div>
                      <i className="fas fa-phone"></i>{" "}
                      <span className="contact_us_subtitle">Phone Number</span>{" "}
                    </div>
                    <p className="contact_us_info">09132879000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
