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
//

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
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
              <label for="validationCustom01" class="form-label text-left">
                Email
              </label>
              <input
                {...getFieldProps("email")}
                className={ "form-control " +
                  (touched.email && errors.email
                    ? "is-invalid"
                    : touched.email && !errors.email ? "is-valid" : "")
                }
                id="validationCustom01"
              />
               <ErrorMessage name="email" component="div" className="invalid-feedback" />
              {touched.email && !errors.email && 
              <div class="valid-feedback">Looks good!</div>
              
              }
            </div>

            <div className="col-md-12 mb-4">
              <input
                {...getFieldProps("password")}
                type="password"
                id="emailInvalid"
                className={ "form-control " +
                (touched.password && errors.password
                  ? "is-invalid"
                  : touched.password && !errors.password ? "is-valid": "")
              }
      
                placeholder="password"
              />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>
            <div className="d-grid gap-2">
              <button loading={isSubmitting} className="btn btn-main mb-4">
                Login
              </button>
            </div>
            <p className="mb-2 text-muted">
              Forgot password?{" "}
              <Link component={RouterLink} to="/auth/forgot-password">
                Reset
              </Link>
            </p>
            <p className="mb-0 text-muted">
              Don’t have an account?{" "}
              <Link component={RouterLink} to="/auth/register">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
}
