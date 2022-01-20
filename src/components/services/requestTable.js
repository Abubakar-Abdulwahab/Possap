import React, { useEffect, useState } from "react";
import StatusButton from "../status/status";
import DataTable from "../Table/DataTable";
import {
  ExtractColumns,
  CharacterColumns,
  EscortColumns,
  RevenueColumns,
  ActivityColumns,
} from "../../fixtures/column";
import data from "../../assets/db/extract.json";

const RequestTable = () => {
  const [status, setStatus] = useState([]);
  const [statusRow, setstatusRow] = useState(null);
  const [statusColumn, setStatusColumn] = useState([]);
  useEffect(() => {
    const fullExtractColumn = [
      ...ExtractColumns,
      {
        dataField: "status",
        text: "status",
        sort: true,
        formatter: (value, row) => (
          <>
            <StatusButton
              setstatusRow={setstatusRow}
              setStatus={setStatus}
              value={value}
              row={row}
            />
          </>
        ),
      },
    ];
    setStatusColumn(fullExtractColumn);
  }, [statusColumn]);

  //   const fullCharacterColumn = [
  //     ...ExtractColumns,
  //     {
  //       dataField: "status",
  //       text: "status",
  //       sort: true,
  //       formatter: (value, row) => (
  //         <>
  //           <StatusButton
  //             setstatusRow={setstatusRow}
  //             setStatus={setStatus}
  //             value={value}
  //             row={row}
  //           />
  //         </>
  //       ),
  //     },
  //   ];
  //   console.log(fullExtractColumn, "test");
  //  extractColumns
  return (
    <div class="col-md-12 mt-3">
      <DataTable columns={statusColumn} data={data} title="Activity" />
      <DataTable columns={CharacterColumns} data={data} title="Character" />
      <DataTable columns={EscortColumns} data={data} title="Escort" />
      <DataTable columns={RevenueColumns} data={data} title="Escort" />
    </div>
  );
};

export default RequestTable;
