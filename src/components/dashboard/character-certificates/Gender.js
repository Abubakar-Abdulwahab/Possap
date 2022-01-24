import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from '../../../utils/BaseOptionCharts';
import helper from '../../../utils/helper';

// utils


// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;



// ----------------------------------------------------------------------

const CHART_DATA = [44, 75];

export default function CertificateByGender() {

    const chartOptions = merge(BaseOptionChart(), {
        chart: {
          height: 295,
          type: "radialBar",
        },
        series: [67, 84, 97],
        plotOptions: {
          radialBar: {
            hollow: { size: '58%' },
            dataLabels: {
              value: { offsetY: 16 },
              total: {
                show: true,
                formatter: () => helper.fNumber(2325)
              }
            }
          }
        },
        labels: ['Men', 'Women'],
        legend: { floating: false, horizontalAlign: 'center', itemMargin: {
            horizontal: 5,
            vertical: 12
        }, },
      })
  return (
    <div className='card'>
      <div className='card-header'>
        Gender
      </div>
      <div className='card-body'>
        <ReactApexChart type="radialBar" series={CHART_DATA} options={chartOptions} height={300} />
      </div>
    </div>
  );
}
