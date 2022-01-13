import React from 'react'
import AnalyticsActivitiesTable from '../components/dashboard/analytics/AnalyticsActivitiesTable'
import AnalyticsRequestStatus from '../components/dashboard/analytics/AnalyticsRequestStatus'
import AnalyticsServices from '../components/dashboard/analytics/AnalyticsService'
import IntroCards from '../components/dashboard/intro-card'
import AllServiceStats from '../components/services/allServiceStats'
import CommandRating from '../components/services/commandRating'

const MainDashboard = () => {
  let services = ['Police Extract','Character Clearance','Guard & Escort']
    return (
        <>
        <div class="col-md-10 ml-2" style={{marginLeft: '18px'}}>
            <p className='h3-css ml-2 text-dark' >Hi, Welcome back</p>
        </div>
        <IntroCards />
        {/* <AllServiceStats data={services} /> */}
          <div className='row mt-5' style={{marginLeft: '10px'}}>
            <div className='col-md-8'>
                <AnalyticsServices />

            </div>

            <div className='col-md-4'>
                <AnalyticsRequestStatus />

            </div>

            
            </div>  
            <div className='row mt-5' style={{marginLeft: '10px'}}>
                <CommandRating />
            </div>
            <div className='row mt-5' style={{marginLeft: '10px'}}>
                <AnalyticsActivitiesTable />
            </div>
           
        </>
    )
}

export default MainDashboard

