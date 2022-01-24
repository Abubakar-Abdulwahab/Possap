import React from "react";
import GeneralTable from "./components/Table/Table";
import data from "./sample.json";
const Sample = () => {
  const columns = [
    {
      dataField: "id",
      text: "id",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "state",
      text: "State",
      sort: true,
    },
    {
      dataField: "lga",
      text: "LGA",
      sort: true,
    },
    {
      dataField: "country",
      text: "Country",
      sort: true,
    },
  ];
  return (
    <div>
      <GeneralTable data={data} columns={columns} />
    </div>
  );
};

export default Sample;
