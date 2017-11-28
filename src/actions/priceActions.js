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
		fetch('https://newsapi.org/v2/top-headlines?q=cryptocurrencies&apiKey=b0069dc818df4b2a89841b2282f19e58').then(res => {
			return res.json();
		}).then(res => {
			dispatch(getPricesSuccess(res));
		}).catch(err => {
			dispatch(getPricesError(err));
		});
	};
};
