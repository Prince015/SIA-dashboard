
import ChartWidget from 'components/shared-components/ChartWidget'
import StatisticWidget from 'components/shared-components/StatisticWidget'
import React from 'react'
import './Dashboard.css'
const Dashboard = () => {

	const visitorChartData = {
		series: [
			  {
				  name: "New Membership ",
				  data: [45, 52, 38, 24, 33, 26, 21]
			  },
			  {
				  name: "Renew Membership",
				  data: [35, 41, 62, 42, 13, 18, 29]
			  }
		  ],
		  categories:[
			  'JAN 22', 
			  'FEB 22', 
			  'MAR 22', 
			  'APR 22', 
			  'MAY 22', 
			  'JUN 22', 
			  'JUL 22', 
		  ]
	  }

	return (
		<div className='dashboard_container'>
			<StatisticWidget title="Total Revenue" value='$1000' status={-10} subtitle='Compare to last year (2021)' />
			<StatisticWidget title="Total Members" value='1000' status={10} subtitle='Compare to last year (2021)' />
			<StatisticWidget title="Visitors" value='10k' status={10} subtitle='Compare to last year (2021)' />
			<div className='chartBar'>
				<ChartWidget title='Unique Visitors' series={visitorChartData.series} xAxis={visitorChartData.categories} 
				// extra={<Select defaultValue="This Month" style={{width : 120,}} onChange={handleChange} options={[{value :'jan',label:'JAN'},{value :'feb',label:'FEB'},{value :'mar',label:'MAR'},{value :'apr',label:'APR'},]} ></Select>}
				/>
			</div>
		</div>
	)
}

export default Dashboard
