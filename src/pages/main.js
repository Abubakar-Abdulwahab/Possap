<<<<<<< HEAD
import React from 'react'
import AnalyticsActivitiesTable from '../components/dashboard/analytics/AnalyticsActivitiesTable'
import AnalyticsRequestStatus from '../components/dashboard/analytics/AnalyticsRequestStatus'
import AnalyticsServices from '../components/dashboard/analytics/AnalyticsService'
import IntroCards from '../components/dashboard/intro-card'

const MainDashboard = () => {
    return (
        <>
        <div class="col-md-10 ml-2" style={{marginLeft: '18px'}}>
            <p className='h3-css ml-2 text-dark' >Hi, Welcome back</p>
        </div>
        <IntroCards />
          <div className='row mt-5' style={{marginLeft: '10px'}}>
            <div className='col-md-8'>
                <AnalyticsServices />

            </div>
            <div className='col-md-4'>
                <AnalyticsRequestStatus />

            </div>
              
            </div>  
            <div className='row mt-5' style={{marginLeft: '10px'}}>
                <AnalyticsActivitiesTable />
            </div>
        </>
    )
}

export default MainDashboard

=======
import React from "react";
import IntroCards from "../components/dashboard/intro-card";
import Sample from "../Sample";

const MainDashboard = () => {
  return (
    <>
      <div class="col-md-12">
        <h4>Hi, Welcome back</h4>
      </div>
      <IntroCards />
      <Sample />
    </>
  );
};

export default MainDashboard;
>>>>>>> fdaf4b47e67bd6c55206d7389609d4656ffc0428
