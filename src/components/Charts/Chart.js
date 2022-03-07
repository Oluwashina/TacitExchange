import {Line} from 'react-chartjs-2'
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import './Chart.css'
import Moment from 'moment';
import { ChartRequest } from '../../store/actions/dashboard';


const Chart = (props) => {

    const {getChartData, graphData} = props

    const [chartDate, setChartDate] = useState("today");

    const [chartDayData] = useState([
          { id: 1, name: 'tab-1', text: 'Today', value: 'today' },
          { id: 2, name: 'tab-2', text: 'This Week', value: 'week' },
          { id: 3, name: 'tab-3', text: 'Month', value: 'month' },
          { id: 4, name: 'tab-4', text: 'Year', value: 'year' },
      ]);

      //  Get all funding data
    useEffect(() =>{
      const values = 'today'
      getChartData(values)
    },[getChartData])

      const dateFormat = (date) =>{
        var dayShow;
        switch(chartDate){
            // today
            case "today":
                dayShow = 
                  Moment(date).format('YYYY/MM/DD')
                break;
            case "week":
                // week
                dayShow = 
                Moment(date).format('dddd')
                break;
            case "month":
                // month
                dayShow = 
                Moment(date).format('MMMM Do')
                break;
            case "year":
                // year
                dayShow = 
                Moment(date).format('MMMM Do, YYYY')
                break;
            default:
                dayShow = ""
        }
        return dayShow;
      }


        const data = {
          labels: graphData.map(({updatedAt})=> dateFormat(updatedAt)),
          datasets: [
            {
              label: 'OutFlow',
              data: graphData.map(({amount})=> amount),
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

      const FundToggle = (value) =>{
          setChartDate(value)
          var values;
          switch(value){
            case "today":
                values = 'today'
              getChartData(values)
              break;
            case "week":
                // time,user and type is subject to change
              values = 'week'
              getChartData(values)
            break;
            case "month":
                values = 'month'
                  getChartData(values)
                break;
            case "year":
                values = 'year'
                  getChartData(values)
                break;
            default:
                break;
        }
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
      graphData: state.dashboard.chartData,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
      getChartData: (value) => dispatch(ChartRequest(value)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Chart);