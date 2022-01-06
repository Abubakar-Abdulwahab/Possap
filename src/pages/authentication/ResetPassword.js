import { useState } from 'react';
import ResetPasswordForm from '../../components/reset-password/ResetPasswordForm';

// routes
import { PATH_AUTH } from '../../routes/paths';



// ----------------------------------------------------------------------


export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="auth-wrapper">
    <div className="auth-content">
      
    <div className="auth-bg">
              <span className="r"></span>
              <span className="r s"></span>
              <span className="r s"></span>
              <span className="r"></span>
          </div>
          
      <ResetPasswordForm />
    </div>
  </div>
  );
}
