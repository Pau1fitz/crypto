import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainArticle from '../../components/MainArticle';
import NewsSection from '../../components/NewsSection';

class CurrencyPage extends Component {

	componentDidMount() {

		const currency = this.props.match.params.currency;
		this.props.getHeadlines(currency);
		this.props.getPopularArticles(currency);
		this.props.getRecentArticles(currency);

	}

	render () {

		const { popularArticles, recentArticles, headlines, mainArticle } = this.props;

		return(
			<div>
				<MainArticle mainArticle={ mainArticle } />
				<NewsSection title='Most Popular' articles={ popularArticles } />
				<NewsSection title='Most Recent' articles={ recentArticles } />
				<NewsSection title='Top Headlines' articles={ headlines } />
			</div>
		);

	}
};

CurrencyPage.propTypes = {
	popularArticles: PropTypes.array,
	recentArticles: PropTypes.array,
	headlines: PropTypes.array,
	mainArticle: PropTypes.object,
	match: PropTypes.object,
	getHeadlines: PropTypes.func,
	getPopularArticles: PropTypes.func,
	getRecentArticles: PropTypes.func,
};

export default CurrencyPage;
