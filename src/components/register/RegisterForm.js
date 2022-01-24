import * as Yup from "yup";
import { useState } from "react";
// import { useSnackbar } from 'notistack5';
import { useFormik, Form, FormikProvider, ErrorMessage, Field } from "formik";

// hooks
import useAuth from "../../hooks/useAuth";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import { Stepper } from "react-form-stepper";
import LogoOnlyLayout from "../../Layouts/LogoOnlyLayout";
import {
  CorporateidentificationType,
  IndividualidentificationType,
  MDAidentificationType,
} from "./option";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();
  const isMountedRef = useIsMountedRef();
  const [selectedUserType, setselectedUserType] = useState(1);
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setcurrentStep] = useState(0);
  const stepStyle = {
    activeBgColor: "#2F4CB0",
    completedBgColor: "#0e2160",
  };
  const totalStep = 2;
  const RegisterSchema = Yup.object().shape({
    userType: Yup.string().required("This field is required"),
    identificationType: Yup.string().required("This field is required"),
    indentificationNumber: Yup.string().required("This field is required"),
    image: Yup.string().required("Password is required"),
  });
  const handleStep = (type) => {
    if (type == "next") {
      let next = currentStep + 1;
      setcurrentStep(next > totalStep ? totalStep : next);
    } else {
      let prev = currentStep - 1;
      setcurrentStep(prev < 0 ? 0 : prev);
    }
  };
  const handleUserType = (type) => {
    if (type == "next") {
      let next = currentStep + 1;
      setcurrentStep(next > totalStep ? totalStep : next);
    } else {
      let prev = currentStep - 1;
      setcurrentStep(prev < 0 ? 0 : prev);
    }
  };

  const formik = useFormik({
    initialValues: {
      userType: "",
      identificationType: "",
      indentificationNumber: "",
      image: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await register(
          values.email,
          values.password,
          values.firstName,
          values.lastName
        );
        // enqueueSnackbar('Register success', {
        //   variant: 'success',
        //   action: (key) => (
        //     <button className="btn btn-info" onClick={() => closeSnackbar(key)}>
        //      x
        //     </button>
        //   )
        // });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    },
  });

  const {
    errors,
    touched,
    handleSubmit,
    values,
    isSubmitting,
    getFieldProps,
    setFieldValue,
  } = formik;

  return (
    <>
      <div className="card text-left">
        <div className="card-body">
          <div className="mb-2 text-center">
            <LogoOnlyLayout />
          </div>
          <h3 className="mb-2 text-center">Signup</h3>
            <h5 className="mb-3 text-center">Create an account to get started.</h5>

          <Stepper
            steps={[
              { label: "Step 1" },
              { label: "Step 2" },
              { label: "Step 3" },
            ]}
            activeStep={currentStep}
            styleConfig={stepStyle}
          />
          {currentStep === 0 &&
            <StepOne />
          
          }
          {currentStep === 1 &&
            <StepTwo />
          
          }
          <div className="d-flex justify-content-between">
            {currentStep > 0 && (
              <a
                className="btn btn-main text-light"
                role="button"
                onClick={() => handleStep("prev")}
              >
                Prev
              </a>
            )}
            <a
              className="btn btn-main text-light text-right"
              role="button"
              onClick={() => handleStep("next")}
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
