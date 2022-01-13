import React from "react";
import PropTypes from "prop-types";
import ExtractIncomeGenerated from "../../components/dashboard/extracts/IncomeGenerated";
import FinanceCards from "../../components/dashboard/finance/FinanceCards";
import IncomeExpense from "../../components/dashboard/finance/IncomeExpense";
import CommandRating from "../../components/services/commandRating";

const Finance = (props) => {
  const data = [
    {
      title: 'Generated Income',
      color: 'rgb(0, 82, 73)',
      bg: 'rgb(200, 250, 205)',
      chart: '#00ab55',
    },
    {
      title: 'Expenses',
      color: '#ffc107',
      bg: '#fff7cd',
      chart: '#ffc107',
    },
    {
      title: 'Number of Payments',
      color: '#2d99ff',
      bg: '#80bdf6',
      chart: '#2d99ff',
    },
  ]
  return (
    <>
    <div className="row mb-3">
      {data.map(d =>(
        <div className="col-md-4">
            <FinanceCards key={data.title} data={d}/>
        </div>

      ))}
     
    </div>
    <div className="row  mb-3">
      <div className="col-md-4">
              <IncomeExpense />
          </div>
      
              <CommandRating />
          
      
    </div>
    </>
  );
};

Finance.propTypes = {};

export default Finance;
