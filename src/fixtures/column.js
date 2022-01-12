import helper from "../utils/helper";
export const ActivityColumns  = [
    {
       dataField: 'id',
       text: 'Product ID',
       sort: true
     }, 
     {
       dataField: 'name',
       text: 'Name',
       sort: true
     }, 
     {
       dataField: 'state',
       text: 'State',
       sort: true
     },
     {
       dataField: 'lga',
       text: 'LGA',
       sort: true
     },
     {
       dataField: 'command',
       text: 'Command',
       sort: true
     },
     {
       dataField: 'category',
       text: 'Service Category',
       sort: true
     }
   ];

export const extractColumns = [
    "name",
    "command",
    "division",
    "location",
    "category",
    "sub-category",
    "status"
].map(e => {
  return {
    dataField: e,
    text: helper.capitalizeFirstLetter(e),
    sort: true
  }
})
