import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Landing/navbar";
import Footer from "../Landing/footer";

const About = () => {
  return (
    <>
      <div>
        <NavBar />
        <section id="about__hero">
          <div class="about__hero_bg">
            <div class="about__content">
              <p>Everything you need to know</p>
              <h2>About POSSAP</h2>
            </div>
          </div>
        </section>

        <section id="about__history">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img
                  src="./images/popo.jpg"
                  alt=""
                  class="about__history_img"
                />
              </div>
              <div class="col-md-6">
                <div class="history__content">
                  <h2>HISTORY OF THE NIGERIA POLICE FORCE</h2>
                  <p>
                    The Nigeria Police Force (NPF) is the principal law
                    enforcement agency in Nigeria. It has staff deployment
                    across the 36 states of the country and the Federal Capital
                    Territory (FCT). The command and control of the Nigeria
                    Police Force is under the Inspector-General of Police (IGP).
                    For administrative ease, the Force is divided into eight (8)
                    administrative departments, viz. Finance and Administration;
                    Operations; Logistics and Supply; Force Criminal
                    Investigation Department; Training and Development; Research
                    and Planning; Information and Communication Technology and
                    Force Intelligence Bureau, each headed by a Deputy
                    Inspector-General of Police (DIG). The Force is further
                    divided into 17 Operational Zonal Commands (usually
                    comprising between two and three State Commands) and 37
                    State Commands including the FCT. While the Zone is headed
                    by an Assistant Inspector-General of Police (AIG), the State
                    Command is headed by a Commissioner of Police (CP), the Area
                    Command by an Assistant Commissioner of Police (ACP) and the
                    Division by an officer in the Superintendent cadre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about__possap">
          <div class="container">
            <div class="row">
              <div class="possap__content">
                <h2>POLICE SPECIALIZED SERVICES AUTOMATION PROJECT (POSSAP)</h2>
                <p>
                  An Initiative launched by the Nigeria Police Force (NPF) for
                  improvements in the efficiency of the processes and
                  administration of all its fee-based Specialized Services
                  through automation. This solution will use smart technology to
                  automate and manage the entire process of rendering Police
                  Specialized Services in an efficient, transparent and highly
                  professional manner in line with global best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about__objectives">
          <div class="container">
            <div class="row">
              <div class="objectives__content">
                <h2>Objectives</h2>
                <div class="row">
                  <div class="col-md-6">
                    <span class="objectives_nr">01</span>
                    <p>
                      {" "}
                      To improve efficiency in the process and administration of
                      all fee-based specialized services provided by the Nigeria
                      Police Force;
                    </p>
                    <span class="objectives_nr">02</span>
                    <p>
                      {" "}
                      To enhance the general working conditions of officers and
                      men as well as advance the public perception and image of
                      the Nigeria Police Force;
                    </p>
                  </div>
                  <div class="col-md-6">
                    <span class="objectives_nr">03</span>
                    <p>
                      {" "}
                      To reposition the Nigeria Police for improved service
                      delivery in meeting its statutory and other non-core
                      obligations;
                    </p>
                    <span class="objectives_nr">04</span>
                    <p>
                      {" "}
                      To act as a catalyst for transformation of Police
                      administrative and operational activities through fusion
                      of technology and improved processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div class="container">
            <div class="row">
              <div class="services__content">
                <h2> POLICE SPECIALIZED SERVICES</h2>
                <p>
                  With respect to extant and relevant laws, the Police Force
                  Order which draws strength from the Police Act 2020, provides
                  for the Nigeria Police to charge fees for specialized services
                  rendered to the Nigerian public. These include the services of
                  Police Orderlies for protection and safety of lives and
                  properties. Likewise, the Police Act 2020 permits the NPF to
                  charge fees for private engagements and other Specialized
                  Services. It is on this basis that the Police has since its
                  inception applied fees on services such as Escort Services,
                  Issuance of Licenses for Arms & Ammunition, Police Extracts
                  and other Specialized Services. Police Specialized Services
                  also referred to as Police Revenue Services include Police
                  Escort & Special Security Services, Arms & Ammunition
                  Licenses, Contractor Registration, International Driving
                  Permit, Police Extract & Information Services, other permits &
                  reports services provided pursuant to the Force Order.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <span class="objectives_nr">01</span>
                    <p class="services__paragraph">
                      {" "}
                      Guards and Special Protection Services
                    </p>
                    <span class="objectives_nr">02</span>
                    <p class="services__paragraph"> Arms and Ammunition</p>
                    <ul>
                      <li>Issuance of Fire Arm and License</li>
                    </ul>
                    <span class="objectives_nr">03</span>
                    <p class="services__paragraph">
                      {" "}
                      Police Information Services
                    </p>
                    <ul>
                      <li>Police Extract</li>
                      <li>Police Character Clearance Certificate</li>
                      <li>Police Investigation Report</li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <span class="objectives_nr">04</span>
                    <p class="services__paragraph"> Contractor Registration</p>
                    <ul>
                      <li>Contractor Registration</li>
                      <li>Renewal of Contractor Registration</li>
                    </ul>
                    <span class="objectives_nr">05</span>
                    <p class="services__paragraph">
                      {" "}
                      International Driving Permit
                    </p>
                    <ul>
                      <li>International Driving Permit</li>
                      <li>International Vehicle Certification</li>
                    </ul>
                    <span class="objectives_nr">06</span>
                    <p class="services__paragraph"> Other Services</p>
                    <ul>
                      <li>Tint Permit</li>
                      <li>Electronic Central Motor Registry</li>
                      <li>Use of Uniforms, Accoutrement and Fire Arms</li>
                      <li>Allocation of Spy Plate Numbers</li>
                      <li>Permit to Import/Sell and Use Fireworks</li>
                      <li>Police Clearance for DPR Approval</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="help">
          <div class="container">
            <div class="row">
              <div class="help__content">
                <h2 class="help__title ">Need help with getting started?</h2>
                <div class="row">
                  <div class="col-md-4">
                    <img src="./images/questionTwo.svg" alt="question one" />
                  </div>
                  <div class="col-md-4">
                    <p>
                      We understand that you might have questions about the
                      process of making a request and possible complaints. Feel
                      free to reach out to us
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img src="./images/questionOne.svg" alt="question two" />
                  </div>
                </div>
                <div class="benefits__btn_container">
                  <a href="#" role="button" class="btn  benefits__btn">
                    Contact Us
                  </a>
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

export default About;
