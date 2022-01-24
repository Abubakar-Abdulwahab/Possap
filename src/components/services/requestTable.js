import React from 'react'
import DataTable from '../Table/DataTable'
import {policeExtractColumns} from '../../fixtures/column'
import data from '../../assets/db/extract.json'
const RequestTable = () => {
    //  extractColumns
    return (
        <div class="col-md-12 mt-3">
            <DataTable columns={policeExtractColumns} data={data} title="Activity" />
    </div>
    )
}

export default RequestTable
