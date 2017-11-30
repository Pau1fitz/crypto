import { uniqBy } from 'lodash';

export const getPopularArticlesPending = () => {
	return {
		'type': 'GET_POPULAR_ARTICLES_PENDING'
	};
};

export const getPopularArticlesSuccess = (popularArticles) => {
	return {
		'type': 'GET_POPULAR_ARTICLES_SUCCESS',
		popularArticles
	};
};

export const getPopularArticlesError= () => {
	return {
		'type': 'GET_POPULAR_ARTICLES_ERROR'
	};
};

export const getMainArticlesSuccess = (mainArticle) => {
	return {
		'type': 'GET_MAIN_ARTICLE_SUCCESS',
		mainArticle
	};
};

export const getPopularArticles = (currency) => {
	return dispatch => {
		dispatch(getPopularArticlesPending());
		fetch(`https://newsapi.org/v2/everything?q=${currency}&language=en&from=2017-11-29&to=2017-11-29&language=en&sortBy=popularity&apiKey=b0069dc818df4b2a89841b2282f19e58`).then(res => {
			return res.json();
		}).then(res => {
			res.articles = uniqBy(res.articles, (article) => {
				return article.title;
			}).filter(article => {
				// remove no articles without an image
				return article.urlToImage != null && article.urlToImage.charAt(0) == 'h' && article.description && article.description.indexOf(currency.substr(1)) !== -1;
			});
			let mainArticle = res.articles.shift();
			dispatch(getMainArticlesSuccess(mainArticle));
			dispatch(getPopularArticlesSuccess(res.articles));
		}).catch(err => {
			dispatch(getPopularArticlesError(err));
		});

	};
};


export const getRecentArticlesPending = () => {
	return {
		'type': 'GET_RECENT_ARTICLES_PENDING'
	};
};

export const getRecentArticlesSuccess = (recentArticles) => {
	return {
		'type': 'GET_RECENT_ARTICLES_SUCCESS',
		recentArticles
	};
};

export const getRecentArticlesError= () => {
	return {
		'type': 'GET_RECENT_ARTICLES_ERROR'
	};
};


export const getRecentArticles = (currency) => {
	return dispatch => {
		dispatch(getRecentArticlesPending());
		fetch(`https://newsapi.org/v2/everything?q=${currency}&language=en&sortBy=publishedAt&apiKey=b0069dc818df4b2a89841b2282f19e58`).then(res => {
			return res.json();
		}).then(res => {
			res.articles = uniqBy(res.articles, (article) => {
				return article.title;
			}).filter(article => {
				// remove no articles without an image
				return article.urlToImage != null && article.urlToImage.charAt(0) == 'h' && article.description && article.description.indexOf(currency.substr(1)) !== -1;
			});
			dispatch(getRecentArticlesSuccess(res.articles));
		}).catch(err => {
			dispatch(getRecentArticlesError(err));
		});

		const url = 'https://content.guardianapis.com/search?q=bitcoin&page-size=20&order-by=newest&api-key=0b413069-ba51-4cbb-aac8-2c0145d3dcb3'
		fetch(url).then(res => {
			return res.json();
		}).then(res => {
			let articles = res.response.results.filter(article => {
				return article.id.includes('bitcoin');
			}).map(article => {
				return {
					title: article.webTitle,
					url: article.webUrl,
					publishedAt: article.webPublicationDate,
					urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2014/02/bitcoin-perfecthue.jpg'
				}
			});
			dispatch(getRecentArticlesSuccess(articles));
		});
	};
};
