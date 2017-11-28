import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Prices.css';

class Prices extends Component {

	render() {

		let priceItems = this.props.prices.map(price => {
			return (
				<li className="price-item" key={ price.symbol }>
					<p className='symbol'>{ price.symbol } / USD</p>
					<div className='price-container'>
						<p className='price'> <span className='dollar'>$ </span>{ parseFloat(price.price_usd).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') }</p>
						<p className={price.percent_change_24h > 0 ? 'positive' : 'negative'}>{ price.percent_change_24h > 0 ? `+${price.percent_change_24h}` : `${price.percent_change_24h}` }</p>
					</div>
				</li>
			);
		});

		return (
			<div className='prices-container'>
				<ul>
					{ priceItems }
				</ul>
			</div>
		);
	}
}

Prices.propTypes = {
	prices: PropTypes.array,
};

export default Prices;
