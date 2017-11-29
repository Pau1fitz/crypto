export const getNewsSourcesPending = () => {
	return {
		'type': 'GET_NEWS_SOURCES_PENDING'
	};
};

export const getNewsSourcesSuccess = (newsSources) => {
	return {
		'type': 'GET_NEWS_SOURCES_SUCCESS',
		newsSources
	};
};

export const getNewsSourcesError= () => {
	return {
		'type': 'GET_NEWS_SOURCES_ERROR'
	};
};

export const getNewsSources = () => {
	return dispatch => {
		dispatch(getNewsSourcesPending());
		fetch('https://newsapi.org/v2/sources?language=en&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {
			dispatch(getNewsSourcesSuccess(res.sources));
		}).catch(err => {
			dispatch(getNewsSourcesError(err));
		});
	};
};
