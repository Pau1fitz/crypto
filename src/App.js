import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPrices } from './actions/priceActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// components
import Header from './components/Header';
import Ticker from './components/Ticker';
import Prices from './components/Prices';
import CurrencyPage from './pages/CurrencyPage';
import NewsSourcePage from './pages/NewsSourcePage';

class App extends Component {

	componentDidMount() {


		this.props.getPrices();

	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className='main-container'>
						<div className='main-content'>
							<Route path="/" render={(routeProps)=>	<CurrencyPage {...routeProps} />}/>
							<Route path="/sources" render={(routeProps)=>	<NewsSourcePage {...routeProps} />}/>
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
		getPrices
	},dispatch);

};

App.propTypes = {
	getPrices: PropTypes.func,
	headlines: PropTypes.array,
	prices: PropTypes.array,
	mainArticle: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
