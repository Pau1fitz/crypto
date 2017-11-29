const defaultState = {
	popularArticles: [],
	recentArticles: []
};

export const articleReducer = (state = defaultState, action) => {

	switch (action.type) {

	case "GET_POPULAR_ARTICLES_PENDING":
		return {
			...state,
			getPopularArticlesPending: true
		};

	case "GET_POPULAR_ARTICLES_SUCCESS":
		return {
			...state,
			popularArticles: action.popularArticles,
			getPopularArticlesError: false,
			getPopularArticlesPending: false
		};

	case "GET_POPULAR_ARTICLES_ERROR":
		return {
			...state,
			getPopularArticlesError: true,
			getPopularArticlesPending: false
		};

	case "GET_MAIN_ARTICLE_SUCCESS":
		return {
			...state,
			mainArticle: action.mainArticle
		};

	case "GET_RECENT_ARTICLES_PENDING":
		return {
			...state,
			getRecentArticlesPending: true
		};

	case "GET_RECENT_ARTICLES_SUCCESS":
		return {
			...state,
			recentArticles: action.recentArticles,
			getRecentArticlesError: false,
			getRecentArticlesPending: false
		};

	case "GET_RECENT_ARTICLES_ERROR":
		return {
			...state,
			getRecentArticlesError: true,
			getRecentArticlesPending: false
		};




	default:
		return state;
	}

};

export default articleReducer;
