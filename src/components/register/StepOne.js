import * as Yup from "yup";
import { useState } from "react";
// import { useSnackbar } from 'notistack5';
import { useFormik, Form, FormikProvider, ErrorMessage, Field } from "formik";

// hooks
import useAuth from "../../hooks/useAuth";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import { Stepper } from "react-form-stepper";
import LogoOnlyLayout from "../../Layouts/LogoOnlyLayout";
import { CorporateidentificationType, IndividualidentificationType, MDAidentificationType } from "./option";

//

// ----------------------------------------------------------------------
const initialValues =  {
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    lga: "",
    address: "",
    password: "",
    confirmPassword: "",
  }
export default function LoginForm() {
    const { register } = useAuth();
    const isMountedRef = useIsMountedRef();
    const [selectedUserType, setselectedUserType] = useState(1)
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
  
    const { errors, touched, handleSubmit, values, isSubmitting, getFieldProps, setFieldValue } = formik;
  
    return (
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="card text-left">
            <div className="card-body">
              <div className="mb-2 text-center">
                <LogoOnlyLayout />
              </div>
              <h3 className="mb-2 text-center">Signup</h3>
              <p className="mb-2 text-center">
                Create an account to get started.
              </p>
              <Stepper
                steps={[
                  { label: "Step 1" },
                  { label: "Step 2" },
                  { label: "Step 3" },
                ]}
                activeStep={currentStep}
                styleConfig={stepStyle}
              />
              <div id="my-radio-group">Who are you</div> 
              <div class="form-check form-check-inline text-center">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="userType"
                  id="inlineRadio1"
                  value="individual"
                  // onChange={() => setselectedUserType(1) }
                />
                <label class="form-check-label" for="inlineRadio1">
                  Individual
                </label>
              </div>
              <div class="form-check form-check-inline text-center">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="userType"
                  id="inlineRadio2"
                  value="corporate-ngos"
                //  onChange={() => setselectedUserType(2) }
                />
                <label class="form-check-label" for="inlineRadio2">
                  Corporate/NGOs
                </label>
              </div>
              <div class="form-check form-check-inline text-center">
                <Field
                  class="form-check-input"
                  type="radio"
                  name="userType"
                  id="inlineRadio3"
                  value="mdas"
                  //onChange={() => setselectedUserType(3) }
                />
                <label class="form-check-label" for="inlineRadio3">
                  MDAs
                </label>
              </div>
  
              <div class="col-md-12 text-left mb-3">
                <label for="validationCustom01" class="form-label text-left">
                Identification Type
                </label>
                <select  {...getFieldProps("identificationType")} className={
                    "form-select " +
                    (touched.identificationType && errors.identificationType
                      ? "is-invalid"
                      : touched.identificationType && !errors.identificationType
                      ? "is-valid"
                      : "")
                  } id="validationCustom04" >
                  <option selected disabled value="">Choose...</option>
                    {values.userType=== 'individual' && IndividualidentificationType.map(i =>(
                      <option value={i}>{i}</option>
                    ))}
                    {values.userType=== 'corporate-ngos' && CorporateidentificationType.map(i =>(
                      <option value={i}>{i}</option>
                    ))}
                    {values.userType=== 'mdas' && MDAidentificationType.map(i =>(
                      <option value={i}>{i}</option>
                    ))}
                </select>
                <ErrorMessage
                  name="IndividualidentificationType"
                  component="div"
                  className="invalid-feedback"
                />
                {touched.identificationType && !errors.identificationType && (
                  <div class="valid-feedback">Looks good! {values.identificationType}</div>
                )}
              </div>
  
              <div className="col-md-12 mb-4">
                <input
                  {...getFieldProps("indentificationNumber")}
                
                  id="emailInvalid"
                  className={
                    "form-control " +
                    (touched.indentificationNumber && errors.indentificationNumber
                      ? "is-invalid"
                      : touched.indentificationNumber && !errors.indentificationNumber
                      ? "is-valid"
                      : "")
                  }
                  placeholder="Enter ID Number"
                />
                <ErrorMessage
                  name="indentificationNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              {/* <div className="d-grid gap-2">
                <button loading={isSubmitting} className="btn btn-main mb-4">
                  Login
                </button>
              </div> */}
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
        </Form>
      </FormikProvider>
    );
}
