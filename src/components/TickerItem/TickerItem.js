import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TickerItem.css';

class TickerItem extends Component {

	render() {
		return (
			<li className='ticker-item'>
				{this.props.headline.title}
			</li>
		);
	}

};

TickerItem.propTypes = {
	headline: PropTypes.object
};

export default TickerItem;
