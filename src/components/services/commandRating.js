import { merge } from "lodash";
import React from "react";
import ReactApexChart from "react-apexcharts";
import BaseOptionChart from "../../utils/BaseOptionCharts";
import helper from "../../utils/helper";

const CommandRating = ({isHorizontal = true}) => {
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
      bar: { horizontal: isHorizontal, barHeight: '38%', borderRadius: 2 }
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
          <h3>Top 10 Commands</h3>
        </div>
            <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      
      </div>
    </div>
  );
};

export default CommandRating;
