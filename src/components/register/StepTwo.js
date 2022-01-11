import * as Yup from "yup";
import { useState, useEffect } from "react";

import { useFormik, Form, FormikProvider, ErrorMessage } from "formik";


// hooks
import useAuth from "../../hooks/useAuth";
import useIsMountedRef from "../../hooks/useIsMountedRef";
import LogoOnlyLayout from "../../Layouts/LogoOnlyLayout";

import { SignupSchema } from "../../FormSchema/SignupSchema";
import TextField from "../FormElements/TextField";
import SelectField from "../FormElements/SelectField";
import StateLGA from "../FormElements/StateLGA";
import TextareaField from "../FormElements/Textarea";
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
 const [formSchema, setformSchema] = useState(SignupSchema)

 useEffect(() => {
   
 }, [formSchema])
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
      state: "Abia",
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

  const { errors, touched, values, setFieldValue, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider  value={formik}>
      <Form  autoComplete="off" noValidate onSubmit={handleSubmit}>
       
          {errors.afterSubmit && (
            <div className="alert alert-danger">{errors.afterSubmit}</div>
          )}
           
            <div class="row text-left mb-3">
                {SignupSchema && SignupSchema.map(val =>(
                    <>
                    {val.type == 'text' &&
                        <TextField key={val.name} val={val} getFieldProps={getFieldProps} touched={touched} errors={errors} ErrorMessage={ErrorMessage} />
                    }
                    {val.type == 'textarea' &&
                        <TextareaField key={val.name} val={val} getFieldProps={getFieldProps} touched={touched} errors={errors} ErrorMessage={ErrorMessage} />
                    }
                    {(!['state','lga'].includes(val.name) && val.type === 'select') &&
                         <SelectField values={values}  key={val.name} val={val} getFieldProps={getFieldProps} touched={touched} errors={errors} ErrorMessage={ErrorMessage} />
                    }
                    {['state', 'lga'].includes(val.name) &&
                         <StateLGA setFieldValue={setFieldValue} values={values}  key={val.name} val={val} getFieldProps={getFieldProps} touched={touched} errors={errors} ErrorMessage={ErrorMessage} />
                    }
                    
                    </>
                ))}
            </div>
            <div class="row text-left mb-3">
                <button name="" id="" class="btn btn-main" href="#" role="button">Create Account</button>
            </div>
         
      </Form>
    </FormikProvider>
  );
}
