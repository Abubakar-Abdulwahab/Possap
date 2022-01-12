import React from 'react'
import DataTable from '../Table/DataTable'
import {extractColumns} from '../../fixtures/column'
import data from '../../assets/db/extract.json'
const RequestTable = () => {
    //  extractColumns
    return (
        <div class="col-md-8">
            <DataTable columns={extractColumns} data={data} />
    </div>
    )
}

export default RequestTable
