import { useLocation, Outlet } from 'react-router-dom';


// components
import Logo from '../../components/Logo';
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {!isHome ? (
        <MainFooter />
      ) : (
        <div
          
        >
          <div >
            

            <p>
              Possap
              © All rights reserved
              <br /> made by &nbsp;
              
            </p>
          </div>
        </div>
      )}
    </>
  );
}
