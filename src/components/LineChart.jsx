import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import Typography from '@material-ui/core/Typography';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: true,
      backgroundColor: 'rgba(104, 119, 202,0.4)',
      borderColor: 'rgba(63, 81, 181,1)',
      pointBorderColor: 'rgba(63, 81, 181,1)',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: 'rgba(63, 81, 181,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      data: [3500, 2500, 3000, 4500, 10000, 6000, 4000]
    }
  ]
};


export default class LineChart extends Component {

  render() {
    return (
      <div>
        <Typography variant="h6" gutterBottom style={{ padding: "20px", paddingBottom: "10px" }}>
          Monthly Expenditure
          </Typography>
        <Line data={data} width={"100%"} height={"50px"} options={{
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 2000
              }
            }]
          }
        }} />
      </div>
    );
  }
};