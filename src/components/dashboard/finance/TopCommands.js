import { merge } from "lodash";
import React from "react";
import ReactApexChart from "react-apexcharts";
import BaseOptionChart from "../../../utils/BaseOptionCharts";
import helper from "../../../utils/helper";



const TopCommands = ({isHorizontal = true}) => {
  const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];
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
    plotOptions: {
      bar: { horizontal: false, barHeight: '38%', borderRadius: 2 }
    },
    legend: { floating: true, horizontalAlign: 'center', itemMargin: {
      horizontal: 5,
      vertical: 12
  }, },
    xaxis: {
      categories: [
        ' Kubwa  Command',
        ' Gwarimpa  Command',
        'Apo  Command',
        'Mabushi  Command',
        'Maitama  Command',
        'Lekki  Command',
        'AMAC  Command',
        'Wuse  Command',
        'Bwari  Command',
        'Dutse  Command'
      ]
    }
  });

  return (
    <div class="col-md-8">
      <div class="card user-list">
      <div class="card-header">
          <h3>Top 10 Generating Commands</h3>
        </div>
            <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      
      </div>
    </div>
  );
};

export default TopCommands;
/**
 * Led the frontend development of Bank3d– A customised enterprise resource planning software based on the ERPNext platform, used by manufacturers, distributors and services. 
The project was built with React, Bootstrap on the frontend, Node.js / Typescript on the backed. 
The backend relies on express js which is a Node.js web framework, testing was done using Node.js Jest library. 
On the React frontend libraries like moment, React bootstrap, React chart etc were used. 
The project was deployed and hosted on AWS.
The project includes 5 modules: HR, Account, Facility, IT, Operations etc

 */
