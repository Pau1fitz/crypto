import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPrices } from './actions/priceActions';
import { getHeadlines } from './actions/headlineActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import Header from './components/Header';
import Ticker from './components/Ticker';
import Prices from './components/Prices';
import CurrencyPage from './pages/CurrencyPage';
import GraphPage from './pages/GraphPage';

class App extends Component {

	componentDidMount() {

		this.props.getHeadlines('bitcoin');
		this.props.getPrices();

	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className='main-container'>
						<div className='main-content'>
							<Route path="/home" render={(routeProps)=>	<CurrencyPage {...routeProps} />}/>
							<Route path="/graph" render={(routeProps)=>	<GraphPage {...routeProps} />}/>
						</div>
						<div className='prices-content'>
							<Prices prices={ this.props.prices } />
						</div>
					</div>
					<Ticker headlines={ this.props.headlines } />
				</div>
			</Router>
		);
	}
}


const mapStateToProps = (state) => {

	return {
		headlines: state.headlineReducer.headlines,
		prices: state.priceReducer.prices,
		mainArticle: state.articleReducer.mainArticle,
		popularArticles: state.articleReducer.popularArticles,
		recentArticles: state.articleReducer.recentArticles
	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getPrices,
		getHeadlines
	},dispatch);

};

App.propTypes = {
	getPrices: PropTypes.func,
	getHeadlines: PropTypes.func,
	headlines: PropTypes.array,
	prices: PropTypes.array,
	mainArticle: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
