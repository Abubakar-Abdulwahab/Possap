import React, { useEffect, useState } from "react";

const individual = [
  {
    service: "POLICE EXTRACT",
  },
  {
    service: "POLICE CHARACTER CERTIFICATE",
  },
  {
    service: "ESCORT AND GUARD SERVICES",
    category: [
      {
        value: "Private",
      },
      {
        value: "Politically Exposed Persons (PEP)",
        subcategory: [
          {
            value: "Federal Government Principal Officer",
          },
          {
            value: "State Government Principal Officer",
          },
          {
            value: "Federal Judiciary",
          },
          {
            value: "State Judiciary",
          },
          {
            value: "Federal Legislature",
          },
          {
            value: "State Legislature",
          },
          {
            value: "Diplomat",
          },
          {
            value: "Traditional Ruler",
          },
          {
            value: "Others",
          },
        ],
      },
    ],
  },
];

const corporate = [
  {
    service: "ESCORT AND GUARD SERVICES",
    category: [
      {
        value: "Health",
      },
      {
        value: "Finance",
      },
      {
        value: "Oil & Gas",
      },
      {
        value: "Agriculture",
      },
      {
        value: "NGO",
      },
      {
        value: "Sports",
      },
      {
        value: "Information & Communication Technology",
      },
      {
        value: "Manufacturing",
      },
      {
        value: "Transport",
      },
      {
        value: "Education",
      },
      {
        value: "Mining",
      },
      {
        value: "Aviation",
      },
      {
        value: "Telecommunications",
      },
      {
        value: "Power & Energy",
      },
      {
        value: "Automotive",
      },
      {
        value: "Banking",
      },
      {
        value: "Others",
      },
    ],
  },
];

export const SelectService = ({ setFormData, next }) => {
  const [options, setOptions] = useState([]);
  const [val, setVal] = useState("");
  //   const [show, setShow] = useState(false);
  const [secondOption, setSecondOption] = useState([]);

  const handleRadio = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setVal(value);
  };
  useEffect(() => {
    if (val === "individual") {
      setOptions(individual);
      setFormData((prev) => {
        return {
          ...prev,
          type: val,
        };
      });
    } else if (val === "corporate/ngos") {
      setOptions(corporate);
      setFormData((prev) => {
        return {
          ...prev,
          type: val,
        };
      });
    }
  }, [val, setFormData]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        service: value,
      };
    });
    console.log(e.target.value);
    const val = options.filter((option) => option.service === e.target.value);
    if (val[0].category) {
      setSecondOption(val);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="select__service">
          <div className="shadow-sm py-5 mb-5 bg-body rounded w-50">
            <h2 className="form__title">Select Service</h2>
            <p className="form__subtitle">Kindly select a service below</p>
            <form>
              <div className="select__service_radio_btns">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="individual"
                    name="service"
                    id="service1"
                    onChange={handleRadio}
                  />
                  <label className="form-check-label" for="service1">
                    Individual
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="corporate/ngos"
                    name="service"
                    onChange={handleRadio}
                    id="service2"
                  />
                  <label className="form-check-label" for="service2">
                    Corporate/NGOs
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    onChange={handleRadio}
                    name="service"
                    value="mdas"
                    id="service3"
                  />
                  <label className="form-check-label" for="service3">
                    MDAs
                  </label>
                </div>
              </div>
              <div className="form__select">
                <select
                  className="form-select "
                  aria-label="Default select example"
                  onChange={handleSelect}
                  value="service"
                >
                  <option value="">Select service</option>
                  {options.map((option, index) => (
                    <option value={option.service} key={index}>
                      {option.service}
                    </option>
                  ))}
                </select>
                <div className="form-text mb-3">
                  Select service name to begin request. Example: POLICE EXTRACT
                </div>
                {secondOption[0]?.category && (
                  <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                  >
                    {secondOption[0]?.category?.map((category, index) => (
                      <option value={category.value} key={index}>
                        {category.value}
                      </option>
                    ))}
                  </select>
                )}
                <button className="btn form__btn" onClick={next}>
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
