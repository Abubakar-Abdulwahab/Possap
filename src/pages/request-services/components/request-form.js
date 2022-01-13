import React, { useEffect, useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import NaijaStates from "naija-state-local-government";
import { SidebarNotice } from "./sidebar-notice";

export const RequestForm = ({ setFormData, formData, next, previous }) => {
  const formik = useFormik({
    initialValues: {
      identification_type: "",
      identification_number: "",
      full_name: "",
      phone_number: "",
      email: "",
      gender: "",
      state: "",
      local_government_area: "",
      address: "",
      alternative_contact: "",
      contact_person_name: "",
      contact_person_number: "",
      contact_person_email: "",
    },

    onSubmit: async (values, { setErrors }) => {
      try {
        setFormData((prev) => ({ ...prev, ...values }));
        console.log({ values });
        next();
      } catch (error) {
        console.error(error);
      }
    },
  });
  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;
  const [states, setStates] = useState(NaijaStates.states());
  const [lga, setLga] = useState([]);
  const [showLgs, setShowLgs] = useState(false);

  useEffect(() => {
    if (values.state) {
      const lgs = NaijaStates.lgas(values.state);
      setLga(lgs?.lgas);
      setShowLgs(true);
    } else {
      setShowLgs(false);
    }
  }, [values.state]);
  console.log(values.alternative_contact);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="shadow-sm p-5 mb-5 bg-body rounded">
            <h2 className="form__title">{formData?.service}</h2>
            <p className="form__subtitle">
              Fill in your details of your request.
            </p>
            <FormikProvider value={formik}>
              <Form autoComplete="off" noValidate>
                <div className="mb-3">
                  <label for="identification_type" className="form-label">
                    Identification type
                  </label>
                  <select
                    className="form-select"
                    name="identification_type"
                    {...getFieldProps("identification_type")}
                  >
                    <option>Select option</option>
                    <option value="International Passport">
                      International Passport
                    </option>
                  </select>
                  <div id="identification_type" className="form-text">
                    Specify an identification type.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Identification Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    {...getFieldProps("identification_number")}
                    name="identification_number"
                  />
                  <div className="form-text">
                    Specify identification number of the above selected type.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    {...getFieldProps("full_name")}
                    id="exampleInputPassword1"
                  />
                  <div className="form-text">
                    Please enter your full name. (Firstname Lastname)
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone_number"
                    {...getFieldProps("phone_number")}
                    id="exampleInputPassword1"
                  />
                  <div className="form-text">
                    Specify your active phone number.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    {...getFieldProps("email")}
                    id="exampleInputPassword1"
                  />
                  <div className="form-text">
                    Enter your valid email address
                  </div>
                </div>
                <div className="mb-3">
                  <label for="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    name="gender"
                    {...getFieldProps("gender")}
                  >
                    <option>Select option</option>
                    <option value="Male">Male</option>
                    <option value="Male">Female</option>
                  </select>
                  <div id="gender" className="form-text">
                    Select your gender.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    name="state"
                    {...getFieldProps("state")}
                  >
                    <option value="">Select option</option>
                    {states?.map((state, index) => (
                      <option value={state} key={index}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <div id="state" className="form-text">
                    Select residential state.
                  </div>
                </div>
                {showLgs && (
                  <div className="mb-3">
                    <label for="lga" className="form-label">
                      Local Government Area
                    </label>
                    <select
                      className="form-select"
                      name="local_government_area"
                      {...getFieldProps("local_government_area")}
                    >
                      <option>Select option</option>
                      {lga?.map((lg, index) => (
                        <option value={lg} key={index}>
                          {lg}
                        </option>
                      ))}
                    </select>
                    <div id="local_government_area" className="form-text">
                      Select your residential LGA.
                    </div>
                  </div>
                )}
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    name="address"
                    {...getFieldProps("address")}
                  ></textarea>
                  <div className="form-text">Specify your current address.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Do you have an alternative contact info for this request?
                  </label>
                  <div className="d-flex ">
                    <div className="form-check" style={{ marginRight: 10 }}>
                      <label className="form-check-label">
                        Yes
                        <input
                          className="form-check-input"
                          type="radio"
                          value="Yes"
                          onChange={
                            getFieldProps("alternative_contact").onChange
                          }
                          name="alternative_contact"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        No
                        <input
                          className="form-check-input"
                          type="radio"
                          value="No"
                          onChange={
                            getFieldProps("alternative_contact").onChange
                          }
                          name="alternative_contact"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {values.alternative_contact === "Yes" ? (
                  <>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contact_person_name"
                        {...getFieldProps("contact_person_name")}
                        id="exampleInputPassword1"
                      />
                      <div className="form-text">
                        Please provide the full name of the contact person.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Contact Person Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="contact_person_number"
                        {...getFieldProps("contact_person_number")}
                        id="exampleInputPassword1"
                      />
                      <div className="form-text">
                        Please provide an active phone number of the contact
                        person.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Contact Person Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="contact_person_email"
                        {...getFieldProps("contact_person_email")}
                        id="exampleInputPassword1"
                      />
                      <div className="form-text">
                        Please provide a valid email address of the contact
                        person.
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className="form_btn__group">
                  <button className="btn form__btn" onClick={previous}>
                    Go Back
                  </button>
                  <button className="btn form__btn" onClick={handleSubmit}>
                    Proceed
                  </button>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
        <div className="col-md-4">
          <SidebarNotice />
        </div>
      </div>
    </div>
  );
};
