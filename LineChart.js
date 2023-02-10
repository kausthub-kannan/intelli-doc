import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 55, 80, 81, 56]
//     }, {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [75, 55, 40, 81, 76]
//     }
//   ]
// }

function LineChart({chartData}){
  return ( 
    <div className=' w-8/12 ml-40 mt-14'>
    <h1 className='text-6xl'>BPM</h1>
    <br /><br/>
        <Line
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
  
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      }
          }
          }
          
        />
        </div>
  )
}

export default LineChart;

