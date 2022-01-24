import helper from "../utils/helper";
export const ActivityColumns  = [
    {
       dataField: 'id',
       text: 'ID',
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

export const policeExtractColumns = helper.arrayToColumn([
  "name",
  "command",
  "division",
  "location",
  "category",
  "sub-category",
  "status"
])
// extractColumns.map(e =>{
//   if(e.dataField === 'status'){
//     return {
//       ...e,
//       // formatter: (row, val) =>(
//       //   // <StatusComponent />
//       // )
//     }
//   }
//   return e
// })
// const col = [...extractColumns, {
//   dataField: 'category',
//   text: 'Service Category',
//   sort: true,
//   // formatter: (row, val) =>(
//       //   // <StatusComponent />
//       // )
//}]
