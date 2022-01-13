import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';


// Utils
import helper from '../../../utils/helper';
import BaseOptionChart from '../../../utils/BaseOptionCharts';

// ----------------------------------------------------------------------

const RootStyle = {
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',       
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '16px',
        padding: '24px',
        color: 'rgb(0, 82, 73)',
        backgroundColor: 'rgb(200, 250, 205)'
    
};

// ----------------------------------------------------------------------

const TOTAL = 18765;
const PERCENT = 2.6;
const CHART_DATA = [{ data: [111, 136, 76, 108, 74, 54, 57, 84] }];

export default function ExtractIncomeGenerated() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => helper.fCurrency(seriesName),
        title: {
          formatter: () => ''
        }
      }
    },
    fill: { gradient: { opacityFrom: 0, opacityTo: 0 } }
  });

  return (
    <div style={RootStyle}>
      <div className="d-flex justify-content-between mb-3" >
        <div>
          <p >Total Incomes</p>
          <h3 style={{color: 'rgb(0, 82, 73)'}}>{helper.fCurrency(TOTAL)}</h3>
        </div>

        <div>
          <div className="row align-items-center justify-content-end mb-1" >
          <i style={{width: '20px'}} className={"feather " + (PERCENT >= 0 ? 'icon-trending-down' : 'icon-trending-up')}></i>
            <span className='ml-1'>
              {PERCENT > 0 && '+'}
              {helper.fPercent(PERCENT)}
            </span>
          </div>
          <span style={{ opacity: 0.72 }}>
            &nbsp;than last month
          </span>
        </div>
      </div>

      <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={132} />
    </div>
  );
}
