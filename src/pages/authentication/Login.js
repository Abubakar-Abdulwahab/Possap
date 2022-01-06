import LoginForm from '../../components/login/LoginForm';


export default function Login() {
  
  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        
      <div className="auth-bg">
                <span className="r"></span>
                <span className="r s"></span>
                <span className="r s"></span>
                <span className="r"></span>
            </div>
            
        <LoginForm />
      </div>
    </div>
  );
}
