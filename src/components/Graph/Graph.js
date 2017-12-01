import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line } from 'recharts';
import moment from 'moment';

import './Graph.css';

class Graph extends Component {

	state = {
		data: [],
		width: 0
	}

	componentDidMount() {
		this.props.getGraphData();
		this.setContainerWidth();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.data != this.props.data) {

			let data = Object.keys(nextProps.data).map(value => {
				return {
					name: value,
					amt: nextProps.data[value],
					price: '$' + parseFloat(nextProps.data[value]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
				};
			});

			this.setState({
				data
			});
		}
	}

	setContainerWidth = () => {
		this.setState({
			width: document.querySelectorAll('.chart-container')[0].offsetWidth * 0.66
		});
	}

	render () {

		const { data, width } = this.state;

		let xValues = Object.keys(this.props.data).map((value, i) => {
			if(i % 30 == 0) {
				return (
					<p key={i}>{ moment(value).format('MMM') }</p>
				);
			}
		}).filter(item => {
			return item != undefined;
		});

		let maxVal = Math.ceil(Math.max(...Object.values(this.props.data)) / 100) * 100;

		let values = [0 , maxVal/4 , maxVal/ 2, (maxVal / 4) * 3, maxVal].filter(val => {
			return isFinite(val);
		}).reverse();

		let yValues = values.map(value => {
			return (
				<p key={value}>${ value }</p>
			);
		});

		return(
			<div className='chart-container'>
				<div className='chart'>
					<div className='values'>
						{yValues}
					</div>
					<LineChart width={width} height={200} data={data} >
						<Line dot={false} type="monotone" dataKey="amt" stroke="rgb(93, 68, 245)" />
					</LineChart>
				</div>
				<div className='dates'>
					{ xValues }
				</div>
			</div>
		);
	}
};

Graph.propTypes = {
	getGraphData: PropTypes.func,
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	])
};

export default Graph;
