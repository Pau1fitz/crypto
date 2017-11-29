import { uniqBy } from 'lodash';

export const getHeadlinesPending = () => {
	return {
		'type': 'GET_HEADLINES_PENDING'
	};
};

export const getHeadlinesSuccess = (headlines) => {
	return {
		'type': 'GET_HEADLINES_SUCCESS',
		headlines
	};
};

export const getHeadlinesError= () => {
	return {
		'type': 'GET_HEADLINES_ERROR'
	};
};

export const getHeadlines = () => {
	return dispatch => {
		dispatch(getHeadlinesPending());
		fetch('https://newsapi.org/v2/top-headlines?q=bitcoin&language=en&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {

			res.articles = uniqBy(res.articles, (article) => {
				return article.title;
			});
			dispatch(getHeadlinesSuccess(res.articles));
		}).catch(err => {
			dispatch(getHeadlinesError(err));
		});
	};
};
