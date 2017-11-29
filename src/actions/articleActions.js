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

export const getPopularArticles = () => {
	return dispatch => {
		dispatch(getPopularArticlesPending());
		fetch('https://newsapi.org/v2/everything?q=bitcoin&language=en&from=2017-11-29&to=2017-11-29&language=en&sortBy=popularity&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {
			res.articles = uniqBy(res.articles, (article) => {
				return article.title;
			}).filter(article => {
				// remove no articles without an image
				return article.urlToImage != null && article.urlToImage.charAt(0) == 'h' && article.description.indexOf('itcoin') !== -1;
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


export const getRecentArticles = () => {
	return dispatch => {
		dispatch(getRecentArticlesPending());
		fetch('https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=publishedAt&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {
			res.articles = uniqBy(res.articles, (article) => {
				return article.title;
			}).filter(article => {
				// remove no articles without an image
				return article.urlToImage != null && article.urlToImage.charAt(0) == 'h' && article.description.indexOf('itcoin') !== -1;
			});
			dispatch(getRecentArticlesSuccess(res.articles));
		}).catch(err => {
			dispatch(getRecentArticlesError(err));
		});
	};
};
