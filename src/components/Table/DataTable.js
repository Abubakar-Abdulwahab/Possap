import React, { useState, useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter, selectFilter, dateFilter } from "react-bootstrap-table2-filter";
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;
const DataTable = ({ data, columns, title }) => {
  const [mobileView, setmobileView] = useState(false);
  const resizeTable = () => {
    if (window.innerWidth >= 768) {
      setmobileView(false);
    }
    if (columns.length > 8) {
      setmobileView(true);
    } else if (window.innerWidth <= 768) {
      setmobileView(true);
    }
  };
  useEffect(() => {
    resizeTable();
    window.addEventListener("resize", () => {
      resizeTable();
    });
  }, [mobileView]);
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <ToolkitProvider keyField="id" data={data} columns={columns} search>
          {(props) => (
            <div>
              <h3>{title}</h3>
              <div className="d-flex justify-content-between">
              <div>
              <SearchBar {...props.searchProps} />
              <ClearSearchButton className="ml-3" {...props.searchProps} />
              </div>
              <ExportCSVButton {...props.csvProps} className="btn btn-main">
                Export CSV!!
              </ExportCSVButton>
              </div>
              <BootstrapTable 
                {...props.baseProps}
                pagination={ paginationFactory() }
                filter={filterFactory()}
                headerClasses="header-class"
                classes={!mobileView ? "table " : "table table-responsive"}
                className="table table-responsive"
                bordered={false}
                noDataIndication="Fetching Data"
              />
              
            </div>
          )}
        </ToolkitProvider>
      </div>
    </div>
  );
};

export default DataTable;
