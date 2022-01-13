import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from '../../../utils/BaseOptionCharts';
import './chart.css'
// utils
import helper from '../../../utils/helper';


// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

// const ChartWrapperStyle = styled('div')(({ theme }) => ({
//   height: CHART_HEIGHT,
//   marginTop: theme.spacing(5),
//   '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
//   '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
//     overflow: 'visible'
//   },
//   '& .apexcharts-legend': {
//     height: LEGEND_HEIGHT,
//     alignContent: 'center',
//     position: 'relative !important',
//     borderTop: `solid 1px ${theme.palette.divider}`,
//     top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
//   }
// }));

// ----------------------------------------------------------------------

const CHART_DATA = [12244, 53345, 44313];

export default function ExtractUserCategory() {


  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      '#CFFBD3',
      '#5BE584',
      '#00AB55',
      '#007B55'
    ],
    labels: ['Individual', 'Corporate', 'MDAs'],
    stroke: { colors: ['#fff'] },
    legend: { floating: false, horizontalAlign: 'center', itemMargin: {
        horizontal: 5,
        vertical: 12
    }, },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => helper.fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            value: {
              formatter: (val) => helper.fNumber(val)
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return helper.fNumber(sum);
              }
            }
          }
        }
      }
    }
  });

  return (
    <div className='card'>
    <div className='card-header'>
        <h3>Application by category</h3>
    </div>
      
      <div className="mt-3 mx-3"  dir="ltr">
        <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} height={280} />
      </div>
    </div>
  );
}
