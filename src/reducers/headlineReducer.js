const defaultState = {
	headlines: []
};

export const headlineReducer = (state = defaultState, action) => {

	switch (action.type) {

	case "GET_HEADLINES_PENDING":
		return {
			...state,
			getHeadlinesPending: true
		};

	case "GET_HEADLINES_SUCCESS":
		return {
			...state,
			headlines: action.headlines,
			getHeadlinesError: false,
			getHeadlinesPending: false
		};

	case "GET_HEADLINES_ERROR":
		return {
			...state,
			getHeadlinesError: true,
			getHeadlinesPending: false
		};

	default:
		return state;
	}

};

export default headlineReducer;
