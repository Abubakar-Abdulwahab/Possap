import { useState } from 'react';
import { Outlet } from 'react-router-dom';

//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

// ----------------------------------------------------------------------




const  DashboardLayout =() => {


  return (
    <div>
      <DashboardSidebar  />
      <DashboardNavbar  />
      <div className="pcoded-main-container">
        <div class="pcoded-wrapper">
          <div class="pcoded-content">
            <div class="pcoded-inner-content">
              <div class="main-body">
                <div class="page-wrapper">
                  <div class="row">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardLayout
