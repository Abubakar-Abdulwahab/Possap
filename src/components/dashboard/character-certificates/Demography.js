import { merge } from 'lodash';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from '../../../utils/BaseOptionCharts';
// material



// ----------------------------------------------------------------------

const CHART_DATA = 
    [
        { name: 'Age', data: [76, 42, 29, 41, 27, 138] },
      ]

  

export default function Demographics() {


  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 6,
      colors: ['transparent']
    },
    colors: '#ffe700',
    xaxis: {
      categories: ['18-24', '25-34', '35-44', '45-54', '55-4', '65+']
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`
      }
    }
  });

  return (
    <div className='card'>
      <div className='card-header'>
          <h3>Demographics</h3>
      </div>
        <div className="mt-3 mx-3" dir="ltr">
            <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
        </div>

    </div>
  );
}
