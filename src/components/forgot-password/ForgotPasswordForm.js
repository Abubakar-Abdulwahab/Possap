import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';

// hooks
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import LogoOnlyLayout from '../../Layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

ForgotPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func
};

export default function ForgotPasswordForm({ onSent, onGetEmail }) {
  const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await resetPassword(values.email);
        if (isMountedRef.current) {
          onSent();
          onGetEmail(formik.values.email);
          setSubmitting(false);
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <div className="card">
      
      {errors.afterSubmit && <div className="alert alert-danger">{errors.afterSubmit}</div>}
                <div className="card-body text-center">
                    <div className="mb-4">
                    <LogoOnlyLayout />
                    </div>
                    <h4 className="mb-1">Confirm you email</h4>
                    <small className="mb-4">A verification code will be sent to the specified email address.</small>
                    <div className="input-group mt-4">
                        <input type="email"
                          {...getFieldProps('email')}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        className="form-control" placeholder="Email" />
                    </div>
                    <div className="d-flex text-left">
                    <small className="text-left">Please enter your email.</small>

                    </div>
                    
                    <div className="d-grid mt-3 gap-2">
 
                    <button loading={isSubmitting} className="btn btn-main mb-4">Login</button>
                                    
                  </div>
                       </div>
            </div>

      </Form>
    </FormikProvider>
  );
}
