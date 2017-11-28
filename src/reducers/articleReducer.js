const defaultState = {
	articles: []
};

export const articleReducer = (state = defaultState, action) => {

	switch (action.type) {

	case "GET_ARTICLES_PENDING":
		return {
			...state,
			getArticlesPending: true
		};

	case "GET_ARTICLES_SUCCESS":
		return {
			...state,
			articles: action.articles,
			getArticlesError: false,
			getArticlesPending: false
		};

	case "GET_ARTICLES_ERROR":
		return {
			...state,
			getArticlesError: true,
			getArticlesPending: false
		};

	default:
		return state;
	}

};

export default articleReducer;
