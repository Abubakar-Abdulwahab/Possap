import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';

// hooks
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import LogoOnlyLayout from '../../Layouts/LogoOnlyLayout';

// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func
};

export default function ResetPasswordForm({ onSent, onGetEmail }) {
  const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    passwordConfirmation: Yup.string()
    // .test('passwords-match', 'Passwords must match', function(value){
    //   return this.parent.password === value
    // })
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
                    <h3 className="mb-4">Reset Password</h3>
                    <div className="input-group mb-3">
                        <input type="email"
                          {...getFieldProps('email')}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        className="form-control" placeholder="Email" />
                    </div>
                    
                    <div className="d-grid gap-2">
 
                    <button loading={isSubmitting} className="btn btn-main mb-4">Login</button>
                                    
                  </div>
                       </div>
            </div>

      </Form>
    </FormikProvider>
  );
}
