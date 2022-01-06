import { Link as RouterLink, Outlet } from 'react-router-dom';
import logo from "../assets/img/PossapLogo.svg"

const LogoOnlyLayout = ({size}) => {

  return (
    <>

        <RouterLink to="/">
          <img style={{width: size ? `${size}` : '80px'}} src={logo} className="img-fluid" alt="" />
        </RouterLink>

      
    </>
  )
}

export default LogoOnlyLayout


