import React, { useEffect, useState } from "react";
import Footer from "../Landing/footer";
import NavBar from "../Landing/navbar";
import { RequestForm } from "./components/request-form";
import { SelectService } from "./components/select-service";
import "./request-service.css";

const RequestServices = () => {
  const [formData, setFormData] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevtStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <SelectService
      next={handleNextStep}
      setFormData={setFormData}
      formData={formData}
    />,
    <RequestForm
      next={handleNextStep}
      formData={formData}
      setFormData={setFormData}
      previous={handlePrevtStep}
    />,
  ];

  useEffect(() => {
    console.log("form data", formData);
  }, [formData]);

  return (
    <>
      <NavBar />
      <div className="request_services__container">{steps[currentStep]}</div>
      <Footer />
    </>
  );
};

export default RequestServices;
