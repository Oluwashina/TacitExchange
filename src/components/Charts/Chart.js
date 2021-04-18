import {Line} from 'react-chartjs-2'
import React, {useState} from 'react';
import {connect} from 'react-redux'
import './Chart.css'


const Chart = () => {

    
  const [chartDate, setChartDate] = useState("today");

   const [chartDayData] = useState([
        { id: 1, name: 'tab-1', text: 'Today', value: 'today' },
        { id: 2, name: 'tab-2', text: 'This Week', value: 'week' },
        { id: 3, name: 'tab-3', text: 'Month', value: 'month' },
        { id: 4, name: 'tab-4', text: 'Year', value: 'year' },
    ]);

     const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Trades',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: '#0898D7',
            borderColor: '#0898D7',
          },
        ],
      }

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }

    const funding = chartDayData.map((item)=>
    <div key={item.id}
        className={chartDate === item.value ? 'filter-tab active-filter' : 'filter-tab'}
        onClick={() => FundToggle(item.value)}
        >   
        <p className="mb-0">{item.text}</p>
    </div>
    )

    const FundToggle = (id) =>{
        setChartDate(id)
    }

    

    const lineChart = (
        <Line 
        data={data}
        options={options}
        />
    )
    

    return (  
        <>
        <div className="line-div">
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                <div className="chart-filter">
                         {funding}
                </div>
            </div>
            {lineChart}
        </div>
        </>
    );
}

const mapStateToProps = (state) =>{
    return{

    }
}

const mapDispatchToProps =(dispatch) =>{
    return{

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Chart);