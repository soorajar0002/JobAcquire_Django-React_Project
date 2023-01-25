import React,{useState} from "react"
import Chart from 'chart.js/auto';
import {Pie } from "react-chartjs-2";

const ChartData = ({datas}) => {
   
    const count = datas.data
    
   const  chartData={
            labels: ['PENDING', 'SHORTLISTED', 'INTERVIEWED','SELECTED'],
            datasets: [{
                data: [count?.pending, count?.shortlisted, count?.interviwed,count?.selected],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#00FF00'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#00FF00']
            }]
        }
    
    // const [chartData, setChartData] = useState({
    //     labels: ['PENDING', 'SHORTLISTED', 'INTERVIEWED','SELECTED'],
    //     datasets: [{
    //         data: [count?.pending, count?.shortlisted, count?.interviwed,count?.selected],
    //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#00FF00'],
    //         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#00FF00']
    //     }]
    // });
    
  return (
    <div className="chart">
        <h1 className="font-bold text-2xl mb-2">APPLICATION STATUS</h1>
    <Pie
        data={chartData}
        options={{
            responsive: true,
            title: { text: 'Pie Chart', display: true },
        }}
    />
</div>
  )
}

export default ChartData
