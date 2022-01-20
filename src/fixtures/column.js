import helper from "../utils/helper";
import StatusButton from "../components/status/status";

import React, { useEffect, useState } from "react";

// const [status, setStatus]= useState([]);
// const [statusRow, setstatusRow]= useState(null);

export const ActivityColumns = [
  {
    dataField: "id",
    text: "Product ID",
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
    dataField: "command",
    text: "Command",
    sort: true,
  },
  {
    dataField: "category",
    text: "Service Category",
    sort: true,
  },
];

export const ExtractColumns = [
  "name",
  "command",
  "division",
  "location",
  "category",
  "sub-category",
].map((e) => {
  return {
    dataField: e,
    text: helper.capitalizeFirstLetter(e),
    sort: true,
  };
});

export const CharacterColumns = [
  "date",
  "name",
  "command",
  "division",
  "location",
  "reason",
  "status",
].map((e) => {
  return {
    dataField: e,
    text: helper.capitalizeFirstLetter(e),
    sort: true,
  };
});

export const EscortColumns = [
  "date",
  "name",
  "service category",
  "category type",
  "state",
  "hierachy",
  "status",
  "start date",
].map((e) => {
  return {
    dataField: e,
    text: helper.capitalizeFirstLetter(e),
    sort: true,
  };
});

export const RevenueColumns = [
  "date",
  "receipt no",
  "payers name",
  "command",
  "revenue head",
  "payment ref",
  "invoice no",
  "file no",
  "credit",
].map((e) => {
  return {
    dataField: e,
    text: helper.capitalizeFirstLetter(e),
    sort: true,
  };
});
