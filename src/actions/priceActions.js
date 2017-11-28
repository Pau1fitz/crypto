export const getPricesPending = () => {
	return {
		type: 'GET_PRICES_PENDING'
	}
}

export const getPricesSuccess = (prices) => {
	return {
		type: 'GET_PRICES_SUCCESS',
		prices
	};
};

export const getPricesError = () => {
	return {
		type: 'GET_PRICES_ERROR'
	};
};

export const getPrices = () => {
	return dispatch => {
		dispatch(getPricesPending());
		fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10').then(res => {
			return res.json();
		}).then(res => {
			dispatch(getPricesSuccess(res));
		}).catch(err => {
			dispatch(getPricesError(err));
		});
	};
};
