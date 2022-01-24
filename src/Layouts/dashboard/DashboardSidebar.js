import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
import SidebarFooter from '../../components/Sidebar/SidebarFooter';
import MenuItem from '../../components/Sidebar/Menu/MenuItem';
import Submenu from '../../components/Sidebar/Menu/Submenu';
import Menu from '../../components/Sidebar/Menu/Menu';
import Sidebar from '../../components/Sidebar/Sidebar';
import SidebarHeader from '../../components/Sidebar/SidebarHeader';
import SidebarContent from '../../components/Sidebar/SidebarContent';



DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    // setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  

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
    <Sidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
         <LogoOnlyLayout size="50px" />
            <a className="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
       
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon='icon-home'
          >
            
            <Link to="/dashboard/main">Dashboard</Link>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <Submenu
            title="Services"
            icon='icon-package'
          >
            <MenuItem>
              <Link to="/dashboard/service/police-extract">Police Extract</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/dashboard/service/character-clearance-certificate">
                
                  Character Certificate
                </Link>
              
            </MenuItem>
            <MenuItem>
            <Link to="/dashboard/service/escort-guard-certificate">
                
                Guard Services
              </Link>
              
            </MenuItem>
          </Submenu>
          <MenuItem
            icon='icon-pie-chart'
          >
            <Link to="/dashboard/finance">
                
            Finance
              </Link>
            
          </MenuItem>
          <Submenu
            title="User"
            icon='icon-user'
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Create</MenuItem>
           
          </Submenu>
        </Menu>
        
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px"
          }}
        >
          <a
            href="/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            {/* <FaGithub /> */}
            <span> Possap</span>
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  
//     <nav className="pcoded-navbar">
//     <div className="navbar-wrapper">
      
//       {brand}
//         {renderContent}
       
//     </div>
// </nav>
  );
}
