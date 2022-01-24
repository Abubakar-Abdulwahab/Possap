import { useState } from 'react';
import { Outlet } from 'react-router-dom';

//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

// ----------------------------------------------------------------------




const  DashboardLayout =() => {


  return (
    <div style={{display: 'flex', position: 'relative', height:'100%'}}>
      <DashboardSidebar  />
      <main>
        {/* <DashboardNavbar  /> */}
        <div className="">
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

      </main>
    </div>
  );
}
export default DashboardLayout
