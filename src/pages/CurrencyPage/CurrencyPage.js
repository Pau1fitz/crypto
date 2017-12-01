import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainArticle from '../../components/MainArticle';
import NewsSection from '../../components/NewsSection';

class CurrencyPage extends Component {

	componentDidMount() {
		this.props.getPopularArticles('bitcoin');
		this.props.getRecentArticles('bitcoin');
	}

	render () {

		const { popularArticles, recentArticles, headlines, mainArticle } = this.props;

		return(
			<div>
				<MainArticle mainArticle={ mainArticle } />
				<NewsSection title='Top Headlines' articles={ headlines } />
				<NewsSection title='Most Popular' articles={ popularArticles } />
				<NewsSection title='Most Recent' articles={ recentArticles } />
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
	getPopularArticles: PropTypes.func,
	getRecentArticles: PropTypes.func,
};

export default CurrencyPage;
