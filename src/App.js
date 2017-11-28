import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHeadlines } from './actions/headlineActions';
import { getPrices } from './actions/priceActions';
import { getArticles } from './actions/articleActions';
import './App.css';

// components
import Header from './components/Header';
import Ticker from './components/Ticker';
import Prices from './components/Prices';

class App extends Component {

	componentDidMount() {
		this.props.getHeadlines();
		this.props.getPrices();
		this.props.getArticles();
	}

	render() {
		return (
			<div className="App">
				<Header />

				<div className='main-container'>
					<div className='main-content' />
					<div className='prices-content'>
						<Prices prices={ this.props.prices } />
					</div>
				</div>

				<Ticker headlines={ this.props.headlines } />

			</div>
		);
	}
}


const mapStateToProps = (state) => {

	return {
		headlines: state.headlineReducer.headlines,
		prices: state.priceReducer.prices
	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getHeadlines,
		getPrices,
		getArticles
	},dispatch);

};

App.propTypes = {
	getHeadlines: PropTypes.func,
	getPrices: PropTypes.func,
	headlines: PropTypes.array,
	prices: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
