import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from '../../../utils/BaseOptionCharts';
import './request-status.css'
// utils
import helper from '../../../utils/helper';



//


// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;



// ----------------------------------------------------------------------

const CHART_DATA = [44, 75, 40];

export default function AnalyticsRequestStatus() {
  console.log(helper.fNumber(2324))
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
    labels: ['Approved', 'Pending', 'Declined']
  })
  return (
    <div className='card'>
      <div className='card-header'>
       <h3> Request Status</h3>
      </div>
      <div dir="ltr" className='card-body'>
        <ReactApexChart type="radialBar" series={CHART_DATA} options={chartOptions} height={321} />
      </div>
    </div>
  );
}
