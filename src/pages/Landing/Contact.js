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
          <div class="contact__content">
            <h2>Contact Us</h2>
            <p>Get in touch for related enquiries and information </p>
          </div>
        </section>
        <section id="contact_us__form">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ">
                <div class="contact_us__form_content">
                  <h2>Send Message</h2>
                  <p>Fill out the form, we will be in touch</p>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                      <div class="form-text">
                        Specify the subject of this message.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                      <div class="form-text">Enter your fullname.</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">
                        Your Message
                      </label>
                      <textarea class="form-control"></textarea>
                      <div class="form-text">
                        What would you like help with.
                      </div>
                    </div>
                    <button type="submit" class="btn btn__submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact_us__card">
                  <h2>Contact Information</h2>
                  <div>
                    <div>
                      <i class="fas fa-map-marker-alt"></i>{" "}
                      <span class="contact_us_subtitle">Address</span>{" "}
                    </div>
                    <p class="contact_us_info">
                      The Nigeria Police Force, Force headquarters, Louis Edet
                      House. Area 11, Garki, Abuja.
                    </p>
                  </div>
                  <div>
                    <div>
                      <i class="fas fa-envelope"></i>{" "}
                      <span class="contact_us_subtitle">Email</span>{" "}
                    </div>
                    <p class="contact_us_info">info@possap.gov.ng</p>
                  </div>
                  <div>
                    <div>
                      <i class="fas fa-phone"></i>{" "}
                      <span class="contact_us_subtitle">Phone Number</span>{" "}
                    </div>
                    <p class="contact_us_info">09132879000</p>
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
