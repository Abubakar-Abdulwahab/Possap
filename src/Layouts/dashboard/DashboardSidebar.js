import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// material

import useAuth from '../../hooks/useAuth';

// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
// import Logo from '../../components/Logo';

import NavSection from '../../components/NavSection';

//
import sidebarConfig from '../SidebarConfig';
import LogoOnlyLayout from '../LogoOnlyLayout';



DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { user } = useAuth();

  

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const brand = (
    <div className="navbar-brand header-logo">
            <LogoOnlyLayout size="50px" />
            <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
        </div>
  )
  const renderContent = (
    <div  className="navbar-content scroll-div">
      <NavSection navConfig={sidebarConfig} />
      
</div>
  );

  return (
    <nav className="pcoded-navbar">
    <div className="navbar-wrapper">
      
      {brand}
        {renderContent}
       
    </div>
</nav>
  );
}
