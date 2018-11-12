import React, { Component } from 'react';
import styled from 'styled-components';
import ReactHighcharts from 'react-highcharts';
import moment from 'moment';
import { ButtonGroup, Button, Collapse, Col } from 'reactstrap';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const CONFIG = {
	chart: {
		type: 'spline',
		height: 206,
	},
	title: {
		useHTML: true,
		align: 'left',
	},
	subtitle: {
		text: ''
	},
	xAxis: {
	},
	yAxis: {
		tickAmount: 5,
		opposite: true,
		title: {
			text: ''
		},
		labels: {
			formatter: function () {
				return this.value < 10 ? this.value * 100 + 'K' : this.value / 10 + 'M';
			}
		},
		min: 0,
		max: 20,
	},
	responsive: {
    rules: [
      {
        condition: {
          maxWidth: 700
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        },
      }
    ]
  },
	tooltip: {
		crosshairs: true,
		shared: true
	},
	plotOptions: {
		spline: {
			marker: {
				radius: 4,
				lineColor: '#666666',
				lineWidth: 1
			}
		}
	},
	series: [{
			name: '',
			marker: {
					className: 'highchart-marker',
					symbol: 'square'
			},
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 11.5, 15.2, 16.5, 13.3, 18.3, 13.9, 9.6]

	}]
};

const RootContainer = styled(Col)`
	box-shadow: 0px 2px 10px rgba(37, 37, 57, 0.05), 1px 2px 3px rgba(37, 37, 57, 0.1);
`;
const HighCharts = styled(ReactHighcharts)`
	& > text.highcharts-credits {
		display: none;
	}
`;
const CalendarBox = styled.div`
	background: #4B42C6;
	box-shadow: 0px 2px 10px rgba(37, 37, 57, 0.05), 1px 2px 3px rgba(37, 37, 57, 0.1);
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	width: 46px;
	height: 46px;
	color: white;
`;
const RoundedDiv = styled(Button)`
	background: #FFFFFF;
	border: 0.5px solid #BFBBF2;
	border-radius: 6px;
	height: 46px;
	width: 130px;
	margin-left: 20px;
`;

class StatisticsGraph extends Component {

	render() {
		const { config } = this.props;

		return (
			<HighCharts config={config} />
		)
	}
}

class StatisticsGraphPanel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showPicker: false,
			startDate: moment(),
			endDate: moment(),
			focusedInput: null,
		};

		this.toggleDatePicker = this.toggleDatePicker.bind(this);
	}

	toggleDatePicker() {
		this.setState({ showPicker: !this.state.showPicker });
	}

	render() {
		
		return (
			<RootContainer xs={12} sm={6}>
				<div className='p-3 d-flex justify-content-end'>
					<DateRangePicker
						startDate={this.state.startDate}
						startDateId="start_date"
						endDate={this.state.endDate}
						endDateId="end_date"
						onDatesChange={({startDate, endDate}) => this.setState({ startDate, endDate })}
						focusedInput={this.state.focusedInput}
						onFocusChange={focusedInput => this.setState({ focusedInput })}
					/>
					<CalendarBox className='d-flex justify-content-center align-items-center'>
						<i className='fas fa-calendar' />
					</CalendarBox>
					<RoundedDiv className='d-flex justify-content-between align-items-center' outline>
						<i className='far fa-clock' />
						Historical
					</RoundedDiv>
				</div>
				<StatisticsGraph 
					config={{ 
						...CONFIG, 
						title: { ...CONFIG.title, text: '<span style="font-size: 8px"><img src="/assets/images/triangle_b.png" />&nbsp;&nbsp;&nbsp;Product Sku</span>' },
						series: [{
							...CONFIG.series[0],
							name: 'Product Sku',
							color: '#00FCB9',
							marker: {
								symbol: 'triangle',
								fillColor: '#00FCB9',
								lineColor: '#FFFFFF',
							},
						}],
						xAxis: {
							min: 0,
							max: 10,
							tickAmount: 10,
							labels: {
								formatter: function() {
									return this.state.startDate.format('ll');
								}.bind(this)
							}
						}
					}}
				/>
				<StatisticsGraph
					config={{ 
						...CONFIG, 
						title: { ...CONFIG.title, text: '<span style="font-size: 8px"><img src="/assets/images/rectangle_b.png" />&nbsp;&nbsp;&nbsp;Product Sku</span>' },
						series: [{
							...CONFIG.series[0],
							name: 'Product Sku',
							color: '#6673E5',
							marker: {
								symbol: 'square',
								fillColor: '#6673E5',
								lineColor: '#FFFFFF',
							},
						}],
					}}
				/>
				<StatisticsGraph 
					config={{ 
						...CONFIG, 
						title: { ...CONFIG.title, text: '<span style="font-size: 8px"><img src="/assets/images/diamond_b.png" />&nbsp;&nbsp;&nbsp;Organic Ordered Revenue</span>' },
						series: [{
							...CONFIG.series[0],
							name: 'Ordered Revenue',
							color: '#F256FA',
							marker: {
								symbol: 'diamond',
								fillColor: '#F256FA',
								lineColor: '#FFFFFF',
							},
						}],
					}}
				/>
				<StatisticsGraph 
					config={{ 
						...CONFIG, 
						title: { ...CONFIG.title, text: '<span style="font-size: 8px"><img src="/assets/images/circle_b.png" />&nbsp;&nbsp;&nbsp;Ordered Revenue</span>' },
						series: [{
							...CONFIG.series[0],
							name: 'Organic Ordered Revenue',
							color: '#FF46AF',
							marker: {
								symbol: 'circle',
								fillColor: '#FF46AF',
								lineColor: '#FFFFFF',
							},
						}],
					}}
				/>
			</RootContainer>
		)
	}
}

export default StatisticsGraphPanel;