const defaultState = {
	prices: []
};

export const priceReducer = (state = defaultState, action) => {

	switch (action.type) {

	case "GET_PRICES_PENDING":
		return {
			...state,
			getPricesPending: true
		};

	case "GET_PRICES_SUCCESS":
		return {
			...state,
			prices: action.prices,
			getPricesError: false,
			getPricesPending: false
		};

	case "GET_PRICES_ERROR":
		return {
			...state,
			getPricesError: true,
			getPricesPending: false
		};

	default:
		return state;
	}

};

export default priceReducer;
