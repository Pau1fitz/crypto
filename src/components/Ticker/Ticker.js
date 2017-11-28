import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TickerItem from '../TickerItem';
import './Ticker.css';

class Ticker extends Component {

	state = {
		left: 0
	}


	componentDidMount() {
		setInterval(() => {
			this.setState((prevState) => {
				return {
					left:  prevState.left - 1
				};
			});
		}, 20);
	}


	render() {

		let headlineTickerItems = this.props.headlines.map(headline => {
			return (
				<TickerItem left={this.state.left} headline={headline} key={headline.title} />
			);
		});

		return (
			<div className='ticker-section'>
				<ul ref={(el) => { this.tickerItems = el; }}  className='ticker-container' style={{ transform: `translateX(${this.state.left}px)`}}>
					{ headlineTickerItems }
				</ul>
			</div>
		);
	}



};

Ticker.propTypes = {
	headlines: PropTypes.array
};

export default Ticker;
