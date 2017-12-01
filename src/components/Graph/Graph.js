import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, Line } from 'recharts';

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
			width: document.querySelectorAll('.chart-container')[0].offsetWidth
		});
	}

	render () {

		const { data, width } = this.state;

		return(
			<div className='chart-container'>
				<LineChart width={width} height={400} data={data} >
					<XAxis dataKey="price" tickSize={0} />
					<Line dot={false} type="monotone" dataKey="amt" stroke="rgb(93, 68, 245)" />
				</LineChart>
			</div>
		);
	}
};

Graph.propTypes = {
	getGraphData: PropTypes.func,
	data: PropTypes.object
};

export default Graph;
