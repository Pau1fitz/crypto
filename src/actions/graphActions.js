export const getGraphDataPending = () => {
	return {
		type: 'GET_GRAPH_DATA_PENDING'
	};
};

export const getGraphDataSuccess = (graphData) => {
	return {
		type: 'GET_GRAPH_DATA_SUCCESS',
		graphData
	};
};

export const getGraphDataError = () => {
	return {
		type: 'GET_GRAPH_DATA_ERROR'
	};
};

export const getGraphData = () => {
	return dispatch => {
		dispatch(getGraphDataPending());
		fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-11-25&end=2017-11-30').then(res => {
			return res.json();
		}).then(res => {
			dispatch(getGraphDataSuccess(res.bpi));
		}).catch(err => {
			dispatch(getGraphDataError(err));
		});
	};
};
