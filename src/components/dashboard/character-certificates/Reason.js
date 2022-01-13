import { merge } from "lodash";
import React from "react";
import ReactApexChart from "react-apexcharts";
import BaseOptionChart from "../../../utils/BaseOptionCharts";
import helper from "../../../utils/helper";


const CertificateReason = () => {
  const CHART_DATA = [{ data: [400, 430, 448] }];
  const chartOptions = merge(BaseOptionChart(), {
    
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => helper.fNumber(seriesName),
        title: {
          formatter: () => ''
        }
      }
    },
   
    legend: { floating: true, horizontalAlign: 'center', itemMargin: {
        horizontal: 5,
        vertical: 12
    }, },
    xaxis: {
      categories: [
        'Travel',
        'Employment',
        'Education',
       
      ]
    }
  });

  return (
    <div class="col-md-6">
      <div class="card user-list">
      <div class="card-header">
          <h3>Reason</h3>
        </div>
            <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      
      </div>
    </div>
  );
};

export default CertificateReason;
