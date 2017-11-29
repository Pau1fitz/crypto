import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHeadlines } from './actions/headlineActions';
import { getPrices } from './actions/priceActions';
import { getPopularArticles, getRecentArticles } from './actions/articleActions';
import './App.css';

// components
import Header from './components/Header';
import Ticker from './components/Ticker';
import Prices from './components/Prices';
import MainArticle from './components/MainArticle';
import NewsSection from './components/NewsSection';


class App extends Component {

	componentDidMount() {
		this.props.getHeadlines();
		this.props.getPrices();
		this.props.getPopularArticles();
		this.props.getRecentArticles();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div className='main-container'>
					<div className='main-content'>
						<MainArticle mainArticle={ this.props.mainArticle } />
						<NewsSection title='Most Popular' articles={ this.props.popularArticles } />
						<NewsSection title='Most Recent' articles={ this.props.recentArticles } />
						<NewsSection title='Top Headlines' articles={ this.props.headlines } />
					</div>
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
		prices: state.priceReducer.prices,
		mainArticle: state.articleReducer.mainArticle,
		popularArticles: state.articleReducer.popularArticles,
		recentArticles: state.articleReducer.recentArticles
	};

};

const mapDispatchToProps = dispatch => {

	return bindActionCreators({
		getHeadlines,
		getPrices,
		getPopularArticles,
		getRecentArticles
	},dispatch);

};

App.propTypes = {
	getHeadlines: PropTypes.func,
	getPopularArticles: PropTypes.func,
	getRecentArticles: PropTypes.func,
	getPrices: PropTypes.func,
	headlines: PropTypes.array,
	prices: PropTypes.array,
	popularArticles: PropTypes.array,
	recentArticles: PropTypes.array,
	mainArticle: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
