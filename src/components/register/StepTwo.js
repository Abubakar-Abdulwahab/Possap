import * as Yup from "yup";
import { useState } from "react";
// import { useSnackbar } from 'notistack5';
import { Link, Link as RouterLink } from "react-router-dom";
import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";

// routes
import { PATH_AUTH } from "../../routes/paths";
// hooks
import useAuth from "../../hooks/useAuth";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import LogoOnlyLayout from "../../Layouts/LogoOnlyLayout";
import TextField from "./TextField";
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
export default function StepTwo() {
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    fullName: Yup.string().required("fullName is required"),
    phone: Yup.string().required("gender is required"),
    email: Yup.string()
        .email("Email must be a valid email address")
        .required("Email is required"),
    gender: Yup.string().required("gender is required"),
    state: Yup.string().required("state is required"),
    lga: Yup.string().required("lga is required"),
    address: Yup.string().required("address is required"),
    password: Yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      state: "",
      lga: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      try {
        await login(values.email, values.password);
        // enqueueSnackbar('Login success', {
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
        resetForm();
        if (isMountedRef.current) {
          setSubmitting(false);
          setErrors({ afterSubmit: error.message });
        }
      }
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="card">
          {errors.afterSubmit && (
            <div className="alert alert-danger">{errors.afterSubmit}</div>
          )}
          <div className="card-body row">
            <div className="mb-2 text-center">
              <LogoOnlyLayout />
            </div>
            <h3 className="mb-2 text-center">Welcome Back</h3>
            <p className="mb-2 text-center">Enter your credentials to continue</p>
            <div class="col-md-12 text-left mb-3">
                {Object.keys(initialValues).map(val =>(
                    <TextField val={val} getFieldProps={getFieldProps} touched={touched} errors={errors} ErrorMessage={ErrorMessage} />
                ))}
            </div>
          
         
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
}
