import { uniqBy } from 'lodash';

export const getArticlesPending = () => {
	return {
		'type': 'GET_ARTICLES_PENDING'
	};
};

export const getMainArticlesSuccess = (mainArticle) => {
	return {
		'type': 'GET_MAIN_ARTICLE_SUCCESS',
		mainArticle
	};
};

export const getArticlesSuccess = (articles) => {
	return {
		'type': 'GET_ARTICLES_SUCCESS',
		articles
	};
};

export const getArticlesError= () => {
	return {
		'type': 'GET_ARTICLES_ERROR'
	};
};

export const getArticles = () => {
	return dispatch => {
		dispatch(getArticlesPending());
		fetch('https://newsapi.org/v2/everything?q=bitcoin&language=en&from=2017-11-29&to=2017-11-29&language=en&sortBy=popularity&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {
			res.articles = uniqBy(res.articles, (article) => {
				return article.title;
			}).filter(article => {
				// remove no articles without an image
				return article.urlToImage != null;
			});
			let mainArticle = res.articles.shift();
			dispatch(getMainArticlesSuccess(mainArticle));
			dispatch(getArticlesSuccess(res.articles));
		}).catch(err => {
			dispatch(getArticlesError(err));
		});
	};
};
