import React from 'react'
import AllServiceStats from '../../components/services/allServiceStats'
import CommandRating from '../../components/services/commandRating'
import DeploymentTable from '../../components/services/deploymentTable'
import RequestTable from '../../components/services/requestTable'
import ServiceCards from '../../components/services/serviceCards'
import StatsCard from '../../components/services/statscard'

const PoliceExtract = () => {
    let arr = ['Daily Sales','Cost of Service','Number of Payments']
    let services = ['Police Extract','Character Clearance','Guard & Escort']
    return (
        <>
        <ServiceCards data={arr} />
        <RequestTable />
        <StatsCard />
        <AllServiceStats data={services} />
        <CommandRating data={services} />
        <DeploymentTable />
        
        </>
    )
}

export default PoliceExtract
