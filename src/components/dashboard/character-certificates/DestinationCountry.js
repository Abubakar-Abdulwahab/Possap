import { merge } from "lodash";
import React from "react";
import ReactApexChart from "react-apexcharts";
import BaseOptionChart from "../../../utils/BaseOptionCharts";
import helper from "../../../utils/helper";


const DestinationCountry = () => {
  const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => helper.fNumber(seriesName),
        title: {
          formatter: () => ''
        }
      }
    },
    plotOptions: {
        bar: { horizontal: true, barHeight: '38%', borderRadius: 2 }
      },
    legend: { floating: true, horizontalAlign: 'center', itemMargin: {
        horizontal: 5,
        vertical: 12
    }, },
    xaxis: {
      categories: [
        'United States',
        'United Kingdom',
        'Dubai',
        'Canada',
        'France',
        'Netherlands',
        'India',
       
      ]
    }
  });

  return (
    <div class="col-md-6">
      <div class="card user-list">
      <div class="card-header">
          <h3>Destination Country</h3>
        </div>
            <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      
      </div>
    </div>
  );
};

export default DestinationCountry;



