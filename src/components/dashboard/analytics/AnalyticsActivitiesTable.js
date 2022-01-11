import React from 'react'
import { ActivityColumns } from '../../../fixtures/column';
import DataTable from '../../Table/DataTable';
import data from '../../../assets/db/activity.json'
const AnalyticsActivitiesTable = () => {

      const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];
      
    return (
        <div>
            <DataTable
                columns={ActivityColumns}
                title="Activity"
                data={data}
            
            />
        </div>
    )
}

export default AnalyticsActivitiesTable
