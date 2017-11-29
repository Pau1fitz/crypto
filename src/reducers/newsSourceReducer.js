const defaultState = {
	newsSources: []
};

export const NewsSourceReducer = (state = defaultState, action) => {

	switch (action.type) {

	case "GET_NEWS_SOURCES_PENDING":
		return {
			...state,
			getNewsSourcesPending: true
		};

	case "GET_NEWS_SOURCES_SUCCESS":
		return {
			...state,
			newsSources: action.newsSources,
			getNewsSourcesError: false,
			getNewsSourcesPending: false
		};

	case "GET_NEWS_SOURCES_ERROR":
		return {
			...state,
			getNewsSourcesError: true,
			getNewsSourcesPending: false
		};

	default:
		return state;
	}

};

export default NewsSourceReducer;
