import { data } from 'jquery';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from '../../../utils/BaseOptionCharts';

// utils
import helper from '../../../utils/helper';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

const PERCENT = 2.6;
const TOTAL_USER = 18765;
const CHART_DATA = [{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }];

export default function CharacterCertificateCard({data}) {
  
  const IconWrapperStyle = {
    width: 24,
    height: 24,
    borderRadius: '50%',
    textAlign: 'center',
    color: data.status ? '#00ab55' : '#ff4d47',
    backgroundColor: data.status ? '#e4f8dd' : '#ffe2e1',
    marginRight: '9px'
  }

  const chartOptions = merge(BaseOptionChart(), {
    colors: data.color,
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: '68%', borderRadius: 2 } },
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 2 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => helper.fNumber(seriesName),
        title: {
          formatter: () => ''
        }
      }
    },
    fill: { gradient: { opacityFrom: 0, opacityTo: 0 } }
  });

  return (
    <div className='card d-flex flex-row  p-3' >
      <div className='flex-grow-1'>
        <h5 >{data.title}</h5>
        <div className='d-flex flex-row align-items-center mt-2 mb-1' >
          <div style={IconWrapperStyle} className='mr-5'>
            <i style={{width: '16px'}} className={"feather " + (PERCENT >= 0 ? 'icon-trending-down' : 'icon-trending-up')}></i>
          
          </div>
          <h6 className='pl-5'>
            {PERCENT > 0 && '+'}
            {helper.fPercent(PERCENT)}
          </h6>
        </div>

        <h2>{helper.fNumber(TOTAL_USER)}</h2>
      </div>

     <div className='pt-4'>
     <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} width={60} height={36} />
     </div>
    </div>
  );
}
