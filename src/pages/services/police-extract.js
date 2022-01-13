import React from 'react'
import CrimeTrends from '../../components/dashboard/extracts/CrimeTrends'
import ExtractUserCategory from '../../components/dashboard/extracts/ExtractUserCategory'
import ExtractIncomeGenerated from '../../components/dashboard/extracts/IncomeGenerated'

import AllServiceStats from '../../components/services/allServiceStats'
import CommandRating from '../../components/services/commandRating'
import DeploymentTable from '../../components/services/deploymentTable'
import RequestTable from '../../components/services/requestTable'
import ServiceCards from '../../components/services/serviceCards'
import StatsCard from '../../components/services/statscard'

const PoliceExtract = () => {
    let arr = ['Total no of extracts','Pending Extracts']
    let services = ['Police Extract','Character Clearance','Guard & Escort']
    return (
        <>
        
        <ServiceCards data={arr} />
        <div className='row mt-3'>
        <div className='col-md-6'>
        <CrimeTrends />
        </div>
        <div className='col-md-6'>
        <ExtractUserCategory />
        </div>

        </div>
        <RequestTable />

        {/* <DeploymentTable /> */}
        
        </>
    )
}

export default PoliceExtract
