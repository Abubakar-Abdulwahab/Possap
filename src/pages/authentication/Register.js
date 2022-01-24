// import { capitalCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import RegisterForm from '../../components/register/RegisterForm';

// hooks
import useAuth from '../../hooks/useAuth';
// routes
import { PATH_AUTH } from '../../routes/paths';
// layouts


// ----------------------------------------------------------------------




// ----------------------------------------------------------------------

export default function Register() {
  const { method } = useAuth();

  return (
    <div className="auth-wrapper" >
    <div className="auth-content" style={{width: '45vw'}}>
      
    <div className="auth-bg">
              <span className="r"></span>
              <span className="r s"></span>
              <span className="r s"></span>
              <span className="r"></span>
          </div>
          
      <RegisterForm />
    </div>
  </div>
  );
}
