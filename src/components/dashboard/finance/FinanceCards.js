import React from 'react'

import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';


// Utils
import helper from '../../../utils/helper';
import BaseOptionChart from '../../../utils/BaseOptionCharts';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

const TOTAL = 18765;
const PERCENT = 2.6;
const CHART_DATA = [{ data: [111, 136, 76, 108, 74, 54, 57, 84] }];

export default function FinanceCards({data}) {
    const RootStyle = {
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '16px',
        padding: '',
        color: data.color,
        backgroundColor: data.bg
    
    };
    const IconWrapperStyle = {
        width: 48,
        height: 48,
        display: 'flex',
        borderRadius: '50%',
        position: 'absolute',
        alignItems: 'center',
        top: '24px',
        right: '24px',
        justifyContent: 'center',
        color: data.color,
        backgroundColor: data.chart
      };
  const chartOptions = merge(BaseOptionChart(), {
    colors: [data.chart],
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
    fill: { gradient: { opacityFrom: 0.56, opacityTo: 0.56 } }
  });

  return (
    <div style={RootStyle}>
        <div style={IconWrapperStyle}>
        <i style={{width: '24px'}} className={"feather " + (PERCENT >= 0 ? 'icon-trending-down' : 'icon-trending-up')}></i>
         
        </div>
      <div className="d-flex flex-column p-3" >
        <div>
          <p >{data.title}</p>
          <h3 style={{color: 'rgb(0, 82, 73)'}}>{helper.fCurrency(TOTAL)}</h3>
        </div>

        <div>
          <div className=" mb-1" >
          <i  className={"feather " + (PERCENT >= 0 ? 'icon-trending-down' : 'icon-trending-up')}></i>
        
             <span style={{paddingLeft: '5px'}}>
              {PERCENT > 0 && '+'}
              {helper.fPercent(PERCENT)}
            </span>
          <span style={{ opacity: 0.72 }}>
            &nbsp;than last month
          </span>
          </div>
        </div>
      </div>

      <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={132} />
    </div>
  );
}



